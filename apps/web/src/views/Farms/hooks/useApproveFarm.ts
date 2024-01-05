import { useCallback } from 'react'
import { MaxUint256 } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
import { getMasterChefAddress, getNonBscVaultAddress, getFruitNinjaAddress } from 'utils/addressHelpers'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import { verifyMantleNetwork } from 'utils/verifyMantleNetwork'

// const useApproveFarm = (lpContract: Contract, chainId: number) => {
//   const isBscNetwork = verifyBscNetwork(chainId)
//   const contractAddress = isBscNetwork ? getMasterChefAddress(chainId) : getNonBscVaultAddress(chainId)

//   const { callWithGasPrice } = useCallWithGasPrice()
//   const handleApprove = useCallback(async () => {
//     return callWithGasPrice(lpContract, 'approve', [contractAddress, MaxUint256])
//   }, [lpContract, contractAddress, callWithGasPrice])

//   return { onApprove: handleApprove }
// }
const useApproveFarm = (lpContract: Contract, chainId: number) => {
  const isMantleNetwork = verifyMantleNetwork(chainId)
  const contractAddress = getFruitNinjaAddress(chainId)

  const { callWithGasPrice } = useCallWithGasPrice()
  const handleApprove = useCallback(async () => {
    return callWithGasPrice(lpContract, 'approve', [contractAddress, MaxUint256])
  }, [lpContract, contractAddress, callWithGasPrice])

  return { onApprove: handleApprove }
}

export default useApproveFarm

export const useApproveBoostProxyFarm = (lpContract: Contract, proxyAddress?: string) => {
  const { callWithGasPrice } = useCallWithGasPrice()
  const handleApprove = useCallback(async () => {
    return proxyAddress && callWithGasPrice(lpContract, 'approve', [proxyAddress, MaxUint256])
  }, [lpContract, proxyAddress, callWithGasPrice])

  return { onApprove: handleApprove }
}
