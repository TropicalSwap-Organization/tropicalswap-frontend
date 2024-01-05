import masterchefABIV1 from 'config/abi/masterchefV1.json'
import chunk from 'lodash/chunk'
import { multicallv2 } from 'utils/multicall'
import { SerializedFarm } from '@pancakeswap/farms'
import { SerializedFarmConfig } from '../../config/constants/types'
import { getMasterChefV1Address, getFruitNinjaAddress } from '../../utils/addressHelpers'
import { getMasterchefV1Contract, getFruitNinjaContract } from '../../utils/contractHelpers'
import BigNumber from 'bignumber.js'

const masterChefAddress = getFruitNinjaAddress()
const masterChefContract = getFruitNinjaContract()

// const masterChefAddress = getMasterChefV1Address()
// const masterChefContract = getMasterchefV1Contract()

export const fetchMasterChefFarmPoolLength = async () => {
  const poolLength = await masterChefContract.poolLength()
  return poolLength
}

export const fetchMasterChefPineapplePerBlock = async () => {
  const pineapplePerBlock = await masterChefContract.pineapplePerBlock()
  return pineapplePerBlock
}

const masterChefFarmCalls = (farm: SerializedFarm) => {
  const { pid } = farm
  return pid || pid === 0
    ? [
        {
          address: masterChefAddress,
          name: 'poolInfo',
          params: [pid],
        },
        {
          address: masterChefAddress,
          name: 'totalAllocPoint',
        },
      ]
    : [null, null]
}

export const fetchMasterChefData = async (farms: SerializedFarmConfig[]): Promise<any[]> => {
  const masterChefCalls = farms.map((farm) => masterChefFarmCalls(farm))
  const chunkSize = masterChefCalls.flat().length / farms.length
  const masterChefAggregatedCalls = masterChefCalls
    .filter((masterChefCall) => masterChefCall[0] !== null && masterChefCall[1] !== null)
    .flat()
  const masterChefMultiCallResult = await multicallv2({ abi: masterchefABIV1, calls: masterChefAggregatedCalls })
  const masterChefChunkedResultRaw = chunk(masterChefMultiCallResult, chunkSize)
  let masterChefChunkedResultCounter = 0
  return masterChefCalls.map((masterChefCall) => {
    if (masterChefCall[0] === null && masterChefCall[1] === null) {
      return [null, null]
    }
    const data = masterChefChunkedResultRaw[masterChefChunkedResultCounter]
    masterChefChunkedResultCounter++
    return data
  })
}
