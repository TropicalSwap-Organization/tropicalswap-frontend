import {
  BLOCKS_CLIENT,
  BLOCKS_CLIENT_ETH,
  INFO_CLIENT,
  INFO_CLIENT_ETH,
} from "config/constants/endpoints";
import { infoClientETH, infoClient, infoStableSwapClient } from "utils/graphql";

import { ChainId } from "@pancakeswap/sdk";
import {
  ETH_TOKEN_BLACKLIST,
  PCS_ETH_START,
  PCS_V2_START,
  TOKEN_BLACKLIST,
  BSC_TOKEN_WHITELIST,
  ETH_TOKEN_WHITELIST,
} from "config/constants/info";

export type MultiChainName = "BSC" | "ETH" | "MNT";

export const multiChainQueryMainToken = {
  BSC: "BNB",
  ETH: "ETH",
  MNT: "MNT",
};

export const multiChainBlocksClient = {
  BSC: BLOCKS_CLIENT,
  ETH: BLOCKS_CLIENT_ETH,
  MNT: BLOCKS_CLIENT,
};

export const multiChainStartTime = {
  BSC: PCS_V2_START,
  ETH: PCS_ETH_START,
  MNT: PCS_V2_START,
};

export const multiChainId = {
  BSC: ChainId.BSC,
  ETH: ChainId.ETHEREUM,
  MNTTESTNET: ChainId.MANTLE_TESTNET,
  MNT: ChainId.MANTLE,
};

export const multiChainPaths = {
  [ChainId.BSC]: "",
  [ChainId.ETHEREUM]: "/eth",
  [ChainId.MANTLE_TESTNET]: "/mantle",
  [ChainId.MANTLE]: "/mantle",
};

export const multiChainQueryClient = {
  BSC: infoClient,
  ETH: infoClientETH,
  MNT: infoClient,
};

export const multiChainQueryEndPoint = {
  BSC: INFO_CLIENT,
  ETH: INFO_CLIENT_ETH,
  MNT: INFO_CLIENT,
};

export const multiChainScan = {
  BSC: "BscScan",
  ETH: "EtherScan",
  MNT: "MantleScan",
};

export const multiChainTokenBlackList = {
  BSC: TOKEN_BLACKLIST,
  ETH: ETH_TOKEN_BLACKLIST,
  MNT: ETH_TOKEN_BLACKLIST,
};

export const multiChainTokenWhiteList = {
  BSC: BSC_TOKEN_WHITELIST,
  ETH: ETH_TOKEN_WHITELIST,
  MNT: ETH_TOKEN_WHITELIST,
};

export const getMultiChainQueryEndPointWithStableSwap = (
  chainName: MultiChainName
) => {
  const isStableSwap = checkIsStableSwap();
  if (isStableSwap) return infoStableSwapClient;
  return multiChainQueryClient[chainName];
};

export const checkIsStableSwap = () =>
  window.location.href.includes("stableSwap");
