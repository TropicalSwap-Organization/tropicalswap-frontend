import BigNumber from 'bignumber.js'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { SLOW_INTERVAL } from 'config/constants'
import { useCakeBusdPrice, usePappleUsdcPrice } from 'hooks/useBUSDPrice'
import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import useSWRImmutable from 'swr/immutable'
import { BIG_ZERO, BIG_ONE } from '@pancakeswap/utils/bigNumber'
import { useBCakeProxyContractAddress } from 'views/Farms/hooks/useBCakeProxyContractAddress'
import { getMasterchefContract } from 'utils/contractHelpers'
import { useFastRefreshEffect } from 'hooks/useRefreshEffect'
import { getFarmConfig } from '@pancakeswap/farms/constants'
import { DeserializedFarm, DeserializedFarmsState, DeserializedFarmUserData, SerializedFarm } from '@pancakeswap/farms'
import { useActiveChainId } from 'hooks/useActiveChainId'
//import { fetchFarmsPublicDataAsync, fetchFarmUserDataAsync, fetchInitialFarmsData } from '.'
import { fetchFarmsPublicDataAsync, fetchFarmUserDataAsync, fetchInitialFarmsData } from 'state/farmsV1'
import { State } from '../types'
import {
  farmFromLpSymbolSelector,
  farmSelector,
  makeBusdPriceFromPidSelector,
  makeFarmFromPidSelector,
  makeLpTokenPriceFromLpSymbolSelector,
  makeUserFarmFromPidSelector,
} from './selectors'
import { deserializeToken } from '@pancakeswap/token-lists'
import { getBalanceAmount } from '@pancakeswap/utils/formatBalance'



const deserializeFarmUserData = (farm: SerializedFarm): DeserializedFarmUserData => {
  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : BIG_ZERO,
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : BIG_ZERO,
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : BIG_ZERO,
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : BIG_ZERO,
  }
}

const deserializeFarm = (farm: SerializedFarm): DeserializedFarm => {
  const { lpAddress, lpSymbol, v1pid, dual, multiplier, isCommunity, quoteTokenPriceBusd, tokenPriceBusd } = farm

  return {
    lpAddress,
    lpSymbol,
    pid: v1pid,
    dual,
    multiplier,
    isCommunity,
    quoteTokenPriceBusd,
    tokenPriceBusd,
    token: deserializeToken(farm.token),
    quoteToken: deserializeToken(farm.quoteToken),
    userData: deserializeFarmUserData(farm),
    tokenAmountTotal: farm.tokenAmountTotal ? new BigNumber(farm.tokenAmountTotal) : BIG_ZERO,
    quoteTokenAmountTotal: farm.quoteTokenAmountTotal ? new BigNumber(farm.quoteTokenAmountTotal) : BIG_ZERO,
    lpTotalInQuoteToken: farm.lpTotalInQuoteToken ? new BigNumber(farm.lpTotalInQuoteToken) : BIG_ZERO,
    lpTotalSupply: farm.lpTotalSupply ? new BigNumber(farm.lpTotalSupply) : BIG_ZERO,
    lpTokenPrice: farm.lpTokenPrice ? new BigNumber(farm.lpTokenPrice) : BIG_ZERO,
    tokenPriceVsQuote: farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : BIG_ZERO,
    poolWeight: farm.poolWeight ? new BigNumber(farm.poolWeight) : BIG_ZERO,
    lpTokenStakedAmount: farm.lpTokenStakedAmount ? new BigNumber(farm.lpTokenStakedAmount) : BIG_ZERO,
  }
}

export function useFarmsLength() {
  const { chainId } = useActiveChainId()
  return useSWRImmutable(chainId ? ['farmsLength', chainId] : null, async () => {
    const mc = getMasterchefContract(undefined, chainId)
    return (await mc.poolLength()).toNumber()
  })
}

export const usePollFarmsWithUserData = () => {
  const dispatch = useAppDispatch()
  const { account, chainId } = useActiveWeb3React()
  // const {
  //   proxyAddress,
  //   proxyCreated,
  //   isLoading: isProxyContractLoading,
  // } = useBCakeProxyContractAddress(account, chainId)

  useSWRImmutable(
    chainId ? ['publicFarmData', chainId] : null,
    async () => {
      const farmsConfig = await getFarmConfig(chainId)
      const pids = farmsConfig.map((farmToFetch) => farmToFetch.pid)
      //dispatch(fetchFarmsPublicDataAsync({ pids, chainId }))
      dispatch(fetchFarmsPublicDataAsync( pids ))
    },
    {
      refreshInterval: SLOW_INTERVAL,
    },
  )

  // const name = proxyCreated
  //   ? ['farmsWithUserData', account, proxyAddress, chainId]
  //   : ['farmsWithUserData', account, chainId]

  useSWRImmutable(
    // account && chainId && !isProxyContractLoading ? name : null,
    async () => {
      const farmsConfig = await getFarmConfig(chainId)
      const pids = farmsConfig.map((farmToFetch) => farmToFetch.pid)
      //const params = proxyCreated ? { account, pids, proxyAddress, chainId } : { account, pids, chainId }

      // dispatch(fetchFarmUserDataAsync(params))
      dispatch(fetchFarmUserDataAsync({account, pids}))
    },
    {
      refreshInterval: SLOW_INTERVAL,
    },
  )
}

/**
 * Fetches the "core" farm data used globally
 * 2 = CAKE-BNB LP
 * 3 = BUSD-BNB LP
 */
const coreFarmPIDs = {
  56: [2, 3],
  97: [4, 10],
  5: [13, 11],
  1: [124, 125],
  5001: [1],
}

export const usePollCoreFarmData = () => {
  const dispatch = useAppDispatch()
  const { chainId } = useActiveChainId()

  useEffect(() => {
    if (chainId) {
      dispatch(fetchInitialFarmsData({ chainId }))
    }
  }, [chainId, dispatch])

  useFastRefreshEffect(() => {
    if (chainId) {
      // dispatch(fetchFarmsPublicDataAsync({ pids: coreFarmPIDs[chainId], chainId }))
      dispatch(fetchFarmsPublicDataAsync(coreFarmPIDs[chainId]))
    }
  }, [dispatch, chainId])
}

export const useFarms = (): DeserializedFarmsState => {
  // const { chainId } = useActiveChainId()
  // return useSelector(useMemo(() => farmSelector(chainId), [chainId]))
  // console.log("USE FARMS")
  const farms = useSelector((state: State) => state.farmsV1)
  // console.log("SERIALIZED farms", farms)
  const deserializedFarmsData = farms.data.map(deserializeFarm)
  // console.log("deserializedFarmsData", deserializedFarmsData)

  // if(deserializedFarmsData.length > 0){
  //   const deserializedPappleFarm = usePappleFarm(deserializedFarmsData[0])
  //   deserializedFarmsData[0] = deserializedPappleFarm
  // }

  const { loadArchivedFarmsData, userDataLoaded, poolLength, regularCakePerBlock } = farms
  // console.log("loadArchivedFarmsData", loadArchivedFarmsData)
  // console.log("userDataLoaded", userDataLoaded)
  // console.log("poolLength", poolLength)
  // console.log("regularCakePerBlock", regularCakePerBlock)
  return {
    loadArchivedFarmsData,
    userDataLoaded,
    data: deserializedFarmsData,
    poolLength,
    regularCakePerBlock
  }
}


export const useFarmsPoolLength = (): number => {
  // return useSelector((state: State) => state.farms.poolLength)
  return useSelector((state: State) => state.farmsV1.poolLength)
}

export const useFarmFromPid = (pid: number): DeserializedFarm => {
  // const farmFromPid = useMemo(() => makeFarmFromPidSelector(pid), [pid])
  // return useSelector(farmFromPid)
  const farm = useSelector((state: State) => state.farmsV1.data.find((f) => f.v1pid === pid))
  // const farms = useSelector((state: State) => state.farmsV1)
  // const { loadArchivedFarmsData, userDataLoaded, poolLength, regularCakePerBlock } = farms
  // console.log("PID", pid)
  // console.log("loadArchivedFarmsData", loadArchivedFarmsData)
  // console.log("userDataLoaded", userDataLoaded)
  // console.log("poolLength", poolLength)
  // console.log("regularCakePerBlock", regularCakePerBlock)
  // console.log("FARM FROM PID", pid , " : ", farm)
  return deserializeFarm(farm)
}

export const useFarmFromLpSymbol = (lpSymbol: string): DeserializedFarm => {
  // const farmFromLpSymbol = useMemo(() => farmFromLpSymbolSelector(lpSymbol), [lpSymbol])
  // return useSelector(farmFromLpSymbol)
  const farm = useSelector((state: State) => state.farmsV1.data.find((f) => f.lpSymbol === lpSymbol))
  return deserializeFarm(farm)
}
const usePappleFarm = (pappleStakingFarm : DeserializedFarm) : DeserializedFarm => {
  //console.log("PAPPLE FARM", pappleStakingFarm)
  const pappleStakingDeserialized = pappleStakingFarm

  const papplePrice = usePriceCakeBusd()

  pappleStakingDeserialized.lpTokenPrice = papplePrice
  pappleStakingDeserialized.quoteTokenPriceBusd = papplePrice.toString()  
  pappleStakingDeserialized.tokenPriceBusd = papplePrice.toString()  

  return pappleStakingDeserialized
}

export const useFarmUser = (pid): DeserializedFarmUserData => {
  // const farmFromPidUser = useMemo(() => makeUserFarmFromPidSelector(pid), [pid])
  // return useSelector(farmFromPidUser)
  const { userData } = useFarmFromPid(pid)
  // console.log("userData for PID", pid)
  // console.log("userData", userData)
  const { allowance, tokenBalance, stakedBalance, earnings } = userData
  // console.log("allowance", allowance, " , ", "tokenBalance", tokenBalance, " , ", "stakedBalance", stakedBalance, " , ", "earnings", earnings)
  return {
    allowance,
    tokenBalance,
    stakedBalance,
    earnings,
  }
}

// Return the base token price for a farm, from a given pid
export const useBusdPriceFromPid = (pid: number): BigNumber => {
  // const busdPriceFromPid = useMemo(() => makeBusdPriceFromPidSelector(pid), [pid])
  // return useSelector(busdPriceFromPid)
  const farm = useFarmFromPid(pid)
  return farm && new BigNumber(farm.tokenPriceBusd)
}

export const useLpTokenPrice = (symbol: string) => {
  const lpTokenPriceFromLpSymbol = useMemo(() => makeLpTokenPriceFromLpSymbolSelector(symbol), [symbol])
  return useSelector(lpTokenPriceFromLpSymbol)
  // const farm = useFarmFromLpSymbol(symbol)
  // const farmTokenPriceInUsd = useBusdPriceFromPid(farm.pid)
  // let lpTokenPrice = BIG_ZERO

  // if (farm.lpTotalSupply.gt(0) && farm.lpTotalInQuoteToken.gt(0)) {
  //   // Total value of base token in LP
  //   const valueOfBaseTokenInFarm = farmTokenPriceInUsd.times(farm.tokenAmountTotal)
  //   // Double it to get overall value in LP
  //   const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(2)
  //   // Divide total value of all tokens, by the number of LP tokens
  //   const totalLpTokens = getBalanceAmount(farm.lpTotalSupply)
  //   lpTokenPrice = overallValueOfAllTokensInFarm.div(totalLpTokens)
  // }

  // return lpTokenPrice
}

/**
 * @deprecated use the BUSD hook in /hooks
 */
export const usePriceCakeBusd = ({ forceMainnet } = { forceMainnet: false }): BigNumber => {
  // const price = useCakeBusdPrice({ forceMainnet })
  // return useMemo(() => (price ? new BigNumber(price.toSignificant(6)) : BIG_ZERO), [price])
  const price = usePappleUsdcPrice()
  return useMemo(() => (price ? new BigNumber(price.toSignificant(6)) : BIG_ZERO), [price])
  // return new BigNumber(1)
}
