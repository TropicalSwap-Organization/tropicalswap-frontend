import { ChainId } from "@pancakeswap/sdk";

export const verifyMantleNetwork = (chainId: number) => {
  /*   return chainId === ChainId.MANTLE_TESTNET */
  return chainId === ChainId.MANTLE;
};
