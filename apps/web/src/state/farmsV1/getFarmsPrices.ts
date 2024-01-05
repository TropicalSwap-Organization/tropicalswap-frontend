import BigNumber from "bignumber.js";
import { BIG_ONE, BIG_ZERO, BIG_TWO } from "@pancakeswap/utils/bigNumber";
import { filterFarmsByQuoteToken, SerializedFarm } from "@pancakeswap/farms";
import { bscTokens, mantleTestnetTokens } from "@pancakeswap/tokens";
import { ChainId } from "@pancakeswap/sdk";
import { getFullDecimalMultiplier } from "@pancakeswap/utils/getFullDecimalMultiplier";
import { FarmData } from "@pancakeswap/farms";

const getFarmFromTokenSymbol = (
  farms: SerializedFarm[],
  tokenSymbol: string,
  preferredQuoteTokens?: string[]
): SerializedFarm => {
  const farmsWithTokenSymbol = farms.filter(
    (farm) => farm.token.symbol === tokenSymbol
  );
  const filteredFarm = filterFarmsByQuoteToken(
    farmsWithTokenSymbol,
    preferredQuoteTokens
  );
  return filteredFarm;
};

const getFarmBaseTokenPrice = (
  farm: SerializedFarm,
  quoteTokenFarm: SerializedFarm,
  bnbPriceBusd: BigNumber
): BigNumber => {
  const hasTokenPriceVsQuote = Boolean(farm.tokenPriceVsQuote);

  if (farm.quoteToken.symbol === mantleTestnetTokens.usdc.symbol) {
    return hasTokenPriceVsQuote
      ? new BigNumber(farm.tokenPriceVsQuote)
      : BIG_ZERO;
  }

  if (farm.quoteToken.symbol === mantleTestnetTokens.wmnt.symbol) {
    return hasTokenPriceVsQuote
      ? bnbPriceBusd.times(farm.tokenPriceVsQuote)
      : BIG_ZERO;
  }

  // We can only calculate profits without a quoteTokenFarm for BUSD/BNB farms
  if (!quoteTokenFarm) {
    return BIG_ZERO;
  }

  // Possible alternative farm quoteTokens:
  // UST (i.e. MIR-UST), pBTC (i.e. PNT-pBTC), BTCB (i.e. bBADGER-BTCB), ETH (i.e. SUSHI-ETH)
  // If the farm's quote token isn't BUSD or WBNB, we then use the quote token, of the original farm's quote token
  // i.e. for farm PNT - pBTC we use the pBTC farm's quote token - BNB, (pBTC - BNB)
  // from the BNB - pBTC price, we can calculate the PNT - BUSD price
  if (quoteTokenFarm.quoteToken.symbol === mantleTestnetTokens.wmnt.symbol) {
    const quoteTokenInBusd = bnbPriceBusd.times(
      quoteTokenFarm.tokenPriceVsQuote
    );
    return hasTokenPriceVsQuote && quoteTokenInBusd
      ? new BigNumber(farm.tokenPriceVsQuote).times(quoteTokenInBusd)
      : BIG_ZERO;
  }

  if (quoteTokenFarm.quoteToken.symbol === mantleTestnetTokens.usdc.symbol) {
    const quoteTokenInBusd = quoteTokenFarm.tokenPriceVsQuote;
    return hasTokenPriceVsQuote && quoteTokenInBusd
      ? new BigNumber(farm.tokenPriceVsQuote).times(quoteTokenInBusd)
      : BIG_ZERO;
  }

  // Catch in case token does not have immediate or once-removed BUSD/WBNB quoteToken
  return BIG_ZERO;
};

const getFarmQuoteTokenPrice = (
  farm: SerializedFarm,
  quoteTokenFarm: SerializedFarm,
  bnbPriceBusd: BigNumber
): BigNumber => {
  if (farm.quoteToken.symbol === "USDC") {
    return BIG_ONE;
  }

  if (farm.quoteToken.symbol === "WBIT") {
    return bnbPriceBusd;
  }

  if (!quoteTokenFarm) {
    return BIG_ZERO;
  }

  if (quoteTokenFarm.quoteToken.symbol === "WBIT") {
    return quoteTokenFarm.tokenPriceVsQuote
      ? bnbPriceBusd.times(quoteTokenFarm.tokenPriceVsQuote)
      : BIG_ZERO;
  }

  if (quoteTokenFarm.quoteToken.symbol === "USDC") {
    return quoteTokenFarm.tokenPriceVsQuote
      ? new BigNumber(quoteTokenFarm.tokenPriceVsQuote)
      : BIG_ZERO;
  }

  return BIG_ZERO;
};

export const getLpTokenPrice = (
  lpTotalSupply: BigNumber,
  lpTotalInQuoteToken: BigNumber,
  tokenAmountTotal: BigNumber,
  tokenPriceBusd: BigNumber,
  decimals: number
) => {
  // LP token price
  let lpTokenPrice = new BigNumber(0);
  const lpTotalSupplyAsBigNumber = new BigNumber(lpTotalSupply);
  const lpTotalInQuoteTokenBigNumber = new BigNumber(lpTotalInQuoteToken);
  if (lpTotalSupplyAsBigNumber.gt(0) && lpTotalInQuoteTokenBigNumber.gt(0)) {
    // Total value of base token in LP
    const valueOfBaseTokenInFarm = tokenPriceBusd.times(tokenAmountTotal);
    // Double it to get overall value in LP
    const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(BIG_TWO);
    // Divide total value of all tokens, by the number of LP tokens
    const totalLpTokens = lpTotalSupply.div(getFullDecimalMultiplier(decimals));
    lpTokenPrice = overallValueOfAllTokensInFarm.div(totalLpTokens);
  }

  return lpTokenPrice;
};

const evmNativeStableLpMap = {
  [ChainId.MANTLE_TESTNET]: {
    address: "0x86a33b3a32603484763c9470907dab1881063eb2",
    wNative: "WBIT",
    stable: "USDC",
  },
};

export type FarmWithPrices = FarmData & {
  tokenPriceBusd: string;
  quoteTokenPriceBusd: string;
  lpTokenPrice: string;
};

const getFarmsPrices = (farms: FarmData[]): FarmWithPrices[] => {
  const bnbBusdFarm = farms.find((farm) => farm.v1pid === 5);
  const bnbPriceBusd = bnbBusdFarm.tokenPriceVsQuote
    ? BIG_ONE.div(bnbBusdFarm.tokenPriceVsQuote)
    : BIG_ZERO;

  const farmsWithPrices = farms.map((farm) => {
    const quoteTokenFarm = getFarmFromTokenSymbol(
      farms,
      farm.quoteToken.symbol
    );
    const tokenPriceBusd = getFarmBaseTokenPrice(
      farm,
      quoteTokenFarm,
      bnbPriceBusd
    );
    const quoteTokenPriceBusd = getFarmQuoteTokenPrice(
      farm,
      quoteTokenFarm,
      bnbPriceBusd
    );
    const lpTokenPrice = getLpTokenPrice(
      new BigNumber(farm.lpTotalSupply),
      new BigNumber(farm.lpTotalInQuoteToken),
      new BigNumber(farm.tokenAmountTotal),
      tokenPriceBusd,
      18
    );
    if (farm.pid === 0) {
      return {
        ...farm,
        tokenPriceBusd: BIG_ZERO.toJSON(),
        quoteTokenPriceBusd: tokenPriceBusd.toJSON(),
        lpTokenPrice: tokenPriceBusd.toJSON(),
      };
    }

    return {
      ...farm,
      tokenPriceBusd: tokenPriceBusd.toJSON(),
      quoteTokenPriceBusd: quoteTokenPriceBusd.toJSON(),
      lpTokenPrice: lpTokenPrice.toJSON(),
    };
  });
  // console.log("farmsWithPrices", farmsWithPrices);
  return farmsWithPrices;
};

export default getFarmsPrices;
