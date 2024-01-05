// src/index.ts
import JSBI2 from "jsbi";

// src/constants.ts
import { Percent } from "@pancakeswap/swap-sdk-core";

// src/entities/token.ts
import { Token } from "@pancakeswap/swap-sdk-core";

// src/utils.ts
import { getAddress } from "@ethersproject/address";
import invariant from "tiny-invariant";
import warning from "tiny-warning";
function validateAndParseAddress(address) {
  try {
    const checksummedAddress = getAddress(address);
    warning(address === checksummedAddress, `${address} is not checksummed.`);
    return checksummedAddress;
  } catch (error) {
    invariant(false, `${address} is not a valid address.`);
  }
}

// src/entities/token.ts
var ERC20Token = class extends Token {
  constructor(chainId, address, decimals, symbol, name, projectLink) {
    super(chainId, validateAndParseAddress(address), decimals, symbol, name, projectLink);
  }
};

// src/constants.ts
var ChainId = /* @__PURE__ */ ((ChainId2) => {
  ChainId2[ChainId2["ETHEREUM"] = 1] = "ETHEREUM";
  ChainId2[ChainId2["GOERLI"] = 5] = "GOERLI";
  ChainId2[ChainId2["BSC"] = 56] = "BSC";
  ChainId2[ChainId2["BSC_TESTNET"] = 97] = "BSC_TESTNET";
  ChainId2[ChainId2["MANTLE_TESTNET"] = 5001] = "MANTLE_TESTNET";
  ChainId2[ChainId2["MANTLE"] = 5e3] = "MANTLE";
  return ChainId2;
})(ChainId || {});
var ZERO_PERCENT = new Percent("0");
var ONE_HUNDRED_PERCENT = new Percent("1");
var FACTORY_ADDRESS = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";
var FACTORY_ADDRESS_ETH = "0x1097053Fd2ea711dad45caCcc45EfF7548fCB362";
var FACTORY_ADDRESS_MNT_TEST = "0x3A25B0dB8D1b7bc3F789ceA51cf08E2Cc449F6f3";
var FACTORY_ADDRESS_MNT = "0x5B54d3610ec3f7FB1d5B42Ccf4DF0fB4e136f249";
var FACTORY_ADDRESS_MAP = {
  [1 /* ETHEREUM */]: FACTORY_ADDRESS_ETH,
  [5 /* GOERLI */]: FACTORY_ADDRESS_ETH,
  [56 /* BSC */]: FACTORY_ADDRESS,
  [97 /* BSC_TESTNET */]: "0x6725f303b657a9451d8ba641348b6761a6cc7a17",
  [5001 /* MANTLE_TESTNET */]: FACTORY_ADDRESS_MNT_TEST,
  [5e3 /* MANTLE */]: FACTORY_ADDRESS_MNT
};
var INIT_CODE_HASH = "0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5";
var INIT_CODE_HASH_ETH = "0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d";
var INIT_CODE_HASH_MAP = {
  [1 /* ETHEREUM */]: INIT_CODE_HASH_ETH,
  [5 /* GOERLI */]: INIT_CODE_HASH_ETH,
  [56 /* BSC */]: INIT_CODE_HASH,
  [97 /* BSC_TESTNET */]: "0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66",
  [5001 /* MANTLE_TESTNET */]: "0x321aea434584ceee22f77514cbdc4c631d3feba4b643c492f852c922a409ed1e",
  [5e3 /* MANTLE */]: "0x321aea434584ceee22f77514cbdc4c631d3feba4b643c492f852c922a409ed1e"
};
var WETH9 = {
  [1 /* ETHEREUM */]: new ERC20Token(
    1 /* ETHEREUM */,
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    18,
    "WETH",
    "Wrapped Ether",
    "https://weth.io"
  ),
  [5 /* GOERLI */]: new ERC20Token(
    5 /* GOERLI */,
    "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    18,
    "WETH",
    "Wrapped Ether",
    "https://weth.io"
  ),
  [5001 /* MANTLE_TESTNET */]: new ERC20Token(
    5001 /* MANTLE_TESTNET */,
    "0x8734110e5e1dcF439c7F549db740E546fea82d66",
    18,
    "WBIT",
    "Wrapped BIT"
  ),
  [5e3 /* MANTLE */]: new ERC20Token(
    5e3 /* MANTLE */,
    "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
    18,
    "MNT",
    "Mantle"
  )
};
var WBNB = {
  [1 /* ETHEREUM */]: new ERC20Token(
    1 /* ETHEREUM */,
    "0x418D75f65a02b3D53B2418FB8E1fe493759c7605",
    18,
    "WBNB",
    "Wrapped BNB",
    "https://www.binance.org"
  ),
  [56 /* BSC */]: new ERC20Token(
    56 /* BSC */,
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    18,
    "WBNB",
    "Wrapped BNB",
    "https://www.binance.org"
  ),
  [97 /* BSC_TESTNET */]: new ERC20Token(
    97 /* BSC_TESTNET */,
    "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    18,
    "WBNB",
    "Wrapped BNB",
    "https://www.binance.org"
  )
  // [ChainId.MANTLE_TESTNET]: new ERC20Token(
  //   ChainId.MANTLE_TESTNET,
  //   '0x1234567890123456789012345678901234567890',
  //   18,
  //   'WBNB',
  //   'Wrapped BNB (Mantle Testnet)',
  //   'https://www.binance.org'
  // )
};
var WNATIVE = {
  [1 /* ETHEREUM */]: WETH9[1 /* ETHEREUM */],
  [5 /* GOERLI */]: WETH9[5 /* GOERLI */],
  [56 /* BSC */]: WBNB[56 /* BSC */],
  [97 /* BSC_TESTNET */]: WBNB[97 /* BSC_TESTNET */],
  [5001 /* MANTLE_TESTNET */]: WETH9[5001 /* MANTLE_TESTNET */],
  [5e3 /* MANTLE */]: WETH9[5e3 /* MANTLE */]
};
var NATIVE = {
  [1 /* ETHEREUM */]: { name: "Ether", symbol: "ETH", decimals: 18 },
  [5 /* GOERLI */]: { name: "Goerli Ether", symbol: "GOR", decimals: 18 },
  [56 /* BSC */]: {
    name: "Binance Chain Native Token",
    symbol: "BNB",
    decimals: 18
  },
  [97 /* BSC_TESTNET */]: {
    name: "Binance Chain Native Token",
    symbol: "tBNB",
    decimals: 18
  },
  [5001 /* MANTLE_TESTNET */]: {
    name: "Mantle Testnet",
    symbol: "MNT",
    decimals: 18
  },
  [5e3 /* MANTLE */]: {
    name: "Mantle",
    symbol: "MNT",
    decimals: 18
  }
};

// src/trade.ts
function isTradeBetter(tradeA, tradeB, minimumDelta = ZERO_PERCENT) {
  if (tradeA && !tradeB)
    return false;
  if (tradeB && !tradeA)
    return true;
  if (!tradeA || !tradeB)
    return void 0;
  if (tradeA.tradeType !== tradeB.tradeType || !tradeA.inputAmount.currency.equals(tradeB.inputAmount.currency) || !tradeA.outputAmount.currency.equals(tradeB.outputAmount.currency)) {
    throw new Error("Trades are not comparable");
  }
  if (minimumDelta.equalTo(ZERO_PERCENT)) {
    return tradeA.executionPrice.lessThan(tradeB.executionPrice);
  }
  return tradeA.executionPrice.asFraction.multiply(minimumDelta.add(ONE_HUNDRED_PERCENT)).lessThan(tradeB.executionPrice);
}

// src/entities/pair.ts
import {
  InsufficientInputAmountError,
  InsufficientReservesError,
  sqrt,
  CurrencyAmount,
  Price,
  FIVE,
  ONE,
  ZERO,
  _10000,
  _9975,
  MINIMUM_LIQUIDITY
} from "@pancakeswap/swap-sdk-core";
import { getCreate2Address } from "@ethersproject/address";
import { keccak256, pack } from "@ethersproject/solidity";
import JSBI from "jsbi";
import invariant2 from "tiny-invariant";
var PAIR_ADDRESS_CACHE = {};
var composeKey = (token0, token1) => `${token0.chainId}-${token0.address}-${token1.address}`;
var computePairAddress = ({
  factoryAddress,
  tokenA,
  tokenB
}) => {
  const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA];
  const key = composeKey(token0, token1);
  if ((PAIR_ADDRESS_CACHE == null ? void 0 : PAIR_ADDRESS_CACHE[key]) === void 0) {
    PAIR_ADDRESS_CACHE = {
      ...PAIR_ADDRESS_CACHE,
      [key]: getCreate2Address(
        factoryAddress,
        keccak256(["bytes"], [pack(["address", "address"], [token0.address, token1.address])]),
        INIT_CODE_HASH_MAP[token0.chainId]
      )
    };
  }
  return PAIR_ADDRESS_CACHE[key];
};
var Pair = class {
  static getAddress(tokenA, tokenB) {
    return computePairAddress({ factoryAddress: FACTORY_ADDRESS_MAP[tokenA.chainId], tokenA, tokenB });
  }
  constructor(currencyAmountA, tokenAmountB) {
    const tokenAmounts = currencyAmountA.currency.sortsBefore(tokenAmountB.currency) ? [currencyAmountA, tokenAmountB] : [tokenAmountB, currencyAmountA];
    this.liquidityToken = new ERC20Token(
      tokenAmounts[0].currency.chainId,
      Pair.getAddress(tokenAmounts[0].currency, tokenAmounts[1].currency),
      18,
      "Papple-LP",
      "Tropical LPs"
      // 'Cake-LP',
      // 'Pancake LPs'
    );
    this.tokenAmounts = tokenAmounts;
  }
  /**
   * Returns true if the token is either token0 or token1
   * @param token to check
   */
  involvesToken(token) {
    return token.equals(this.token0) || token.equals(this.token1);
  }
  /**
   * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
   */
  get token0Price() {
    const result = this.tokenAmounts[1].divide(this.tokenAmounts[0]);
    return new Price(this.token0, this.token1, result.denominator, result.numerator);
  }
  /**
   * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
   */
  get token1Price() {
    const result = this.tokenAmounts[0].divide(this.tokenAmounts[1]);
    return new Price(this.token1, this.token0, result.denominator, result.numerator);
  }
  /**
   * Return the price of the given token in terms of the other token in the pair.
   * @param token token to return price of
   */
  priceOf(token) {
    invariant2(this.involvesToken(token), "TOKEN");
    return token.equals(this.token0) ? this.token0Price : this.token1Price;
  }
  /**
   * Returns the chain ID of the tokens in the pair.
   */
  get chainId() {
    return this.token0.chainId;
  }
  get token0() {
    return this.tokenAmounts[0].currency;
  }
  get token1() {
    return this.tokenAmounts[1].currency;
  }
  get reserve0() {
    return this.tokenAmounts[0];
  }
  get reserve1() {
    return this.tokenAmounts[1];
  }
  reserveOf(token) {
    invariant2(this.involvesToken(token), "TOKEN");
    return token.equals(this.token0) ? this.reserve0 : this.reserve1;
  }
  getOutputAmount(inputAmount) {
    invariant2(this.involvesToken(inputAmount.currency), "TOKEN");
    if (JSBI.equal(this.reserve0.quotient, ZERO) || JSBI.equal(this.reserve1.quotient, ZERO)) {
      throw new InsufficientReservesError();
    }
    const inputReserve = this.reserveOf(inputAmount.currency);
    const outputReserve = this.reserveOf(inputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
    const inputAmountWithFee = JSBI.multiply(inputAmount.quotient, _9975);
    const numerator = JSBI.multiply(inputAmountWithFee, outputReserve.quotient);
    const denominator = JSBI.add(JSBI.multiply(inputReserve.quotient, _10000), inputAmountWithFee);
    const outputAmount = CurrencyAmount.fromRawAmount(
      inputAmount.currency.equals(this.token0) ? this.token1 : this.token0,
      JSBI.divide(numerator, denominator)
    );
    if (JSBI.equal(outputAmount.quotient, ZERO)) {
      throw new InsufficientInputAmountError();
    }
    return [outputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  }
  getInputAmount(outputAmount) {
    invariant2(this.involvesToken(outputAmount.currency), "TOKEN");
    if (JSBI.equal(this.reserve0.quotient, ZERO) || JSBI.equal(this.reserve1.quotient, ZERO) || JSBI.greaterThanOrEqual(outputAmount.quotient, this.reserveOf(outputAmount.currency).quotient)) {
      throw new InsufficientReservesError();
    }
    const outputReserve = this.reserveOf(outputAmount.currency);
    const inputReserve = this.reserveOf(outputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
    const numerator = JSBI.multiply(JSBI.multiply(inputReserve.quotient, outputAmount.quotient), _10000);
    const denominator = JSBI.multiply(JSBI.subtract(outputReserve.quotient, outputAmount.quotient), _9975);
    const inputAmount = CurrencyAmount.fromRawAmount(
      outputAmount.currency.equals(this.token0) ? this.token1 : this.token0,
      JSBI.add(JSBI.divide(numerator, denominator), ONE)
    );
    return [inputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  }
  getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB) {
    invariant2(totalSupply.currency.equals(this.liquidityToken), "LIQUIDITY");
    const tokenAmounts = tokenAmountA.currency.sortsBefore(tokenAmountB.currency) ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    invariant2(tokenAmounts[0].currency.equals(this.token0) && tokenAmounts[1].currency.equals(this.token1), "TOKEN");
    let liquidity;
    if (JSBI.equal(totalSupply.quotient, ZERO)) {
      liquidity = JSBI.subtract(
        sqrt(JSBI.multiply(tokenAmounts[0].quotient, tokenAmounts[1].quotient)),
        MINIMUM_LIQUIDITY
      );
    } else {
      const amount0 = JSBI.divide(JSBI.multiply(tokenAmounts[0].quotient, totalSupply.quotient), this.reserve0.quotient);
      const amount1 = JSBI.divide(JSBI.multiply(tokenAmounts[1].quotient, totalSupply.quotient), this.reserve1.quotient);
      liquidity = JSBI.lessThanOrEqual(amount0, amount1) ? amount0 : amount1;
    }
    if (!JSBI.greaterThan(liquidity, ZERO)) {
      throw new InsufficientInputAmountError();
    }
    return CurrencyAmount.fromRawAmount(this.liquidityToken, liquidity);
  }
  getLiquidityValue(token, totalSupply, liquidity, feeOn = false, kLast) {
    invariant2(this.involvesToken(token), "TOKEN");
    invariant2(totalSupply.currency.equals(this.liquidityToken), "TOTAL_SUPPLY");
    invariant2(liquidity.currency.equals(this.liquidityToken), "LIQUIDITY");
    invariant2(JSBI.lessThanOrEqual(liquidity.quotient, totalSupply.quotient), "LIQUIDITY");
    let totalSupplyAdjusted;
    if (!feeOn) {
      totalSupplyAdjusted = totalSupply;
    } else {
      invariant2(!!kLast, "K_LAST");
      const kLastParsed = JSBI.BigInt(kLast);
      if (!JSBI.equal(kLastParsed, ZERO)) {
        const rootK = sqrt(JSBI.multiply(this.reserve0.quotient, this.reserve1.quotient));
        const rootKLast = sqrt(kLastParsed);
        if (JSBI.greaterThan(rootK, rootKLast)) {
          const numerator = JSBI.multiply(totalSupply.quotient, JSBI.subtract(rootK, rootKLast));
          const denominator = JSBI.add(JSBI.multiply(rootK, FIVE), rootKLast);
          const feeLiquidity = JSBI.divide(numerator, denominator);
          totalSupplyAdjusted = totalSupply.add(CurrencyAmount.fromRawAmount(this.liquidityToken, feeLiquidity));
        } else {
          totalSupplyAdjusted = totalSupply;
        }
      } else {
        totalSupplyAdjusted = totalSupply;
      }
    }
    return CurrencyAmount.fromRawAmount(
      token,
      JSBI.divide(JSBI.multiply(liquidity.quotient, this.reserveOf(token).quotient), totalSupplyAdjusted.quotient)
    );
  }
};

// src/entities/route.ts
import invariant3 from "tiny-invariant";
import { Price as Price2 } from "@pancakeswap/swap-sdk-core";
var Route = class {
  constructor(pairs, input, output) {
    this._midPrice = null;
    invariant3(pairs.length > 0, "PAIRS");
    const chainId = pairs[0].chainId;
    invariant3(
      pairs.every((pair) => pair.chainId === chainId),
      "CHAIN_IDS"
    );
    const wrappedInput = input.wrapped;
    invariant3(pairs[0].involvesToken(wrappedInput), "INPUT");
    invariant3(typeof output === "undefined" || pairs[pairs.length - 1].involvesToken(output.wrapped), "OUTPUT");
    const path = [wrappedInput];
    for (const [i, pair] of pairs.entries()) {
      const currentInput = path[i];
      invariant3(currentInput.equals(pair.token0) || currentInput.equals(pair.token1), "PATH");
      const output2 = currentInput.equals(pair.token0) ? pair.token1 : pair.token0;
      path.push(output2);
    }
    this.pairs = pairs;
    this.path = path;
    this.input = input;
    this.output = output;
  }
  get midPrice() {
    if (this._midPrice !== null)
      return this._midPrice;
    const prices = [];
    for (const [i, pair] of this.pairs.entries()) {
      prices.push(
        this.path[i].equals(pair.token0) ? new Price2(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.quotient, pair.reserve1.quotient) : new Price2(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.quotient, pair.reserve0.quotient)
      );
    }
    const reduced = prices.slice(1).reduce((accumulator, currentValue) => accumulator.multiply(currentValue), prices[0]);
    return this._midPrice = new Price2(this.input, this.output, reduced.denominator, reduced.numerator);
  }
  get chainId() {
    return this.pairs[0].chainId;
  }
};

// src/entities/trade.ts
import invariant4 from "tiny-invariant";
import {
  ONE as ONE2,
  TradeType,
  ZERO as ZERO2,
  CurrencyAmount as CurrencyAmount2,
  Fraction,
  Price as Price3,
  sortedInsert,
  computePriceImpact
} from "@pancakeswap/swap-sdk-core";
function inputOutputComparator(a, b) {
  invariant4(a.inputAmount.currency.equals(b.inputAmount.currency), "INPUT_CURRENCY");
  invariant4(a.outputAmount.currency.equals(b.outputAmount.currency), "OUTPUT_CURRENCY");
  if (a.outputAmount.equalTo(b.outputAmount)) {
    if (a.inputAmount.equalTo(b.inputAmount)) {
      return 0;
    }
    if (a.inputAmount.lessThan(b.inputAmount)) {
      return -1;
    }
    return 1;
  }
  if (a.outputAmount.lessThan(b.outputAmount)) {
    return 1;
  }
  return -1;
}
function tradeComparator(a, b) {
  const ioComp = inputOutputComparator(a, b);
  if (ioComp !== 0) {
    return ioComp;
  }
  if (a.priceImpact.lessThan(b.priceImpact)) {
    return -1;
  }
  if (a.priceImpact.greaterThan(b.priceImpact)) {
    return 1;
  }
  return a.route.path.length - b.route.path.length;
}
var Trade = class {
  /**
   * Constructs an exact in trade with the given amount in and route
   * @param route route of the exact in trade
   * @param amountIn the amount being passed in
   */
  static exactIn(route, amountIn) {
    return new Trade(route, amountIn, TradeType.EXACT_INPUT);
  }
  /**
   * Constructs an exact out trade with the given amount out and route
   * @param route route of the exact out trade
   * @param amountOut the amount returned by the trade
   */
  static exactOut(route, amountOut) {
    return new Trade(route, amountOut, TradeType.EXACT_OUTPUT);
  }
  constructor(route, amount, tradeType) {
    this.route = route;
    this.tradeType = tradeType;
    const tokenAmounts = new Array(route.path.length);
    if (tradeType === TradeType.EXACT_INPUT) {
      invariant4(amount.currency.equals(route.input), "INPUT");
      tokenAmounts[0] = amount.wrapped;
      for (let i = 0; i < route.path.length - 1; i++) {
        const pair = route.pairs[i];
        const [outputAmount] = pair.getOutputAmount(tokenAmounts[i]);
        tokenAmounts[i + 1] = outputAmount;
      }
      this.inputAmount = CurrencyAmount2.fromFractionalAmount(route.input, amount.numerator, amount.denominator);
      this.outputAmount = CurrencyAmount2.fromFractionalAmount(
        route.output,
        tokenAmounts[tokenAmounts.length - 1].numerator,
        tokenAmounts[tokenAmounts.length - 1].denominator
      );
    } else {
      invariant4(amount.currency.equals(route.output), "OUTPUT");
      tokenAmounts[tokenAmounts.length - 1] = amount.wrapped;
      for (let i = route.path.length - 1; i > 0; i--) {
        const pair = route.pairs[i - 1];
        const [inputAmount] = pair.getInputAmount(tokenAmounts[i]);
        tokenAmounts[i - 1] = inputAmount;
      }
      this.inputAmount = CurrencyAmount2.fromFractionalAmount(
        route.input,
        tokenAmounts[0].numerator,
        tokenAmounts[0].denominator
      );
      this.outputAmount = CurrencyAmount2.fromFractionalAmount(route.output, amount.numerator, amount.denominator);
    }
    this.executionPrice = new Price3(
      this.inputAmount.currency,
      this.outputAmount.currency,
      this.inputAmount.quotient,
      this.outputAmount.quotient
    );
    this.priceImpact = computePriceImpact(route.midPrice, this.inputAmount, this.outputAmount);
  }
  /**
   * Get the minimum amount that must be received from this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  minimumAmountOut(slippageTolerance) {
    invariant4(!slippageTolerance.lessThan(ZERO2), "SLIPPAGE_TOLERANCE");
    if (this.tradeType === TradeType.EXACT_OUTPUT) {
      return this.outputAmount;
    }
    const slippageAdjustedAmountOut = new Fraction(ONE2).add(slippageTolerance).invert().multiply(this.outputAmount.quotient).quotient;
    return CurrencyAmount2.fromRawAmount(this.outputAmount.currency, slippageAdjustedAmountOut);
  }
  /**
   * Get the maximum amount in that can be spent via this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  maximumAmountIn(slippageTolerance) {
    invariant4(!slippageTolerance.lessThan(ZERO2), "SLIPPAGE_TOLERANCE");
    if (this.tradeType === TradeType.EXACT_INPUT) {
      return this.inputAmount;
    }
    const slippageAdjustedAmountIn = new Fraction(ONE2).add(slippageTolerance).multiply(this.inputAmount.quotient).quotient;
    return CurrencyAmount2.fromRawAmount(this.inputAmount.currency, slippageAdjustedAmountIn);
  }
  /**
   * Given a list of pairs, and a fixed amount in, returns the top `maxNumResults` trades that go from an input token
   * amount to an output token, making at most `maxHops` hops.
   * Note this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param nextAmountIn exact amount of input currency to spend
   * @param currencyOut the desired currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param currencyAmountIn used in recursion; the original value of the currencyAmountIn parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  static bestTradeExactIn(pairs, currencyAmountIn, currencyOut, { maxNumResults = 3, maxHops = 3 } = {}, currentPairs = [], nextAmountIn = currencyAmountIn, bestTrades = []) {
    invariant4(pairs.length > 0, "PAIRS");
    invariant4(maxHops > 0, "MAX_HOPS");
    invariant4(currencyAmountIn === nextAmountIn || currentPairs.length > 0, "INVALID_RECURSION");
    const amountIn = nextAmountIn.wrapped;
    const tokenOut = currencyOut.wrapped;
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i];
      if (!pair.token0.equals(amountIn.currency) && !pair.token1.equals(amountIn.currency))
        continue;
      if (pair.reserve0.equalTo(ZERO2) || pair.reserve1.equalTo(ZERO2))
        continue;
      let amountOut;
      try {
        ;
        [amountOut] = pair.getOutputAmount(amountIn);
      } catch (error) {
        if (error.isInsufficientInputAmountError) {
          continue;
        }
        throw error;
      }
      if (amountOut.currency.equals(tokenOut)) {
        sortedInsert(
          bestTrades,
          new Trade(
            new Route([...currentPairs, pair], currencyAmountIn.currency, currencyOut),
            currencyAmountIn,
            TradeType.EXACT_INPUT
          ),
          maxNumResults,
          tradeComparator
        );
      } else if (maxHops > 1 && pairs.length > 1) {
        const pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length));
        Trade.bestTradeExactIn(
          pairsExcludingThisPair,
          currencyAmountIn,
          currencyOut,
          {
            maxNumResults,
            maxHops: maxHops - 1
          },
          [...currentPairs, pair],
          amountOut,
          bestTrades
        );
      }
    }
    return bestTrades;
  }
  /**
   * Return the execution price after accounting for slippage tolerance
   * @param slippageTolerance the allowed tolerated slippage
   */
  worstExecutionPrice(slippageTolerance) {
    return new Price3(
      this.inputAmount.currency,
      this.outputAmount.currency,
      this.maximumAmountIn(slippageTolerance).quotient,
      this.minimumAmountOut(slippageTolerance).quotient
    );
  }
  /**
   * similar to the above method but instead targets a fixed output amount
   * given a list of pairs, and a fixed amount out, returns the top `maxNumResults` trades that go from an input token
   * to an output token amount, making at most `maxHops` hops
   * note this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyIn the currency to spend
   * @param nextAmountOut the exact amount of currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param currencyAmountOut used in recursion; the original value of the currencyAmountOut parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  static bestTradeExactOut(pairs, currencyIn, currencyAmountOut, { maxNumResults = 3, maxHops = 3 } = {}, currentPairs = [], nextAmountOut = currencyAmountOut, bestTrades = []) {
    invariant4(pairs.length > 0, "PAIRS");
    invariant4(maxHops > 0, "MAX_HOPS");
    invariant4(currencyAmountOut === nextAmountOut || currentPairs.length > 0, "INVALID_RECURSION");
    const amountOut = nextAmountOut.wrapped;
    const tokenIn = currencyIn.wrapped;
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i];
      if (!pair.token0.equals(amountOut.currency) && !pair.token1.equals(amountOut.currency))
        continue;
      if (pair.reserve0.equalTo(ZERO2) || pair.reserve1.equalTo(ZERO2))
        continue;
      let amountIn;
      try {
        ;
        [amountIn] = pair.getInputAmount(amountOut);
      } catch (error) {
        if (error.isInsufficientReservesError) {
          continue;
        }
        throw error;
      }
      if (amountIn.currency.equals(tokenIn)) {
        sortedInsert(
          bestTrades,
          new Trade(
            new Route([pair, ...currentPairs], currencyIn, currencyAmountOut.currency),
            currencyAmountOut,
            TradeType.EXACT_OUTPUT
          ),
          maxNumResults,
          tradeComparator
        );
      } else if (maxHops > 1 && pairs.length > 1) {
        const pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length));
        Trade.bestTradeExactOut(
          pairsExcludingThisPair,
          currencyIn,
          currencyAmountOut,
          {
            maxNumResults,
            maxHops: maxHops - 1
          },
          [pair, ...currentPairs],
          amountIn,
          bestTrades
        );
      }
    }
    return bestTrades;
  }
};

// src/entities/native.ts
import invariant5 from "tiny-invariant";
import { NativeCurrency } from "@pancakeswap/swap-sdk-core";
var _Native = class extends NativeCurrency {
  constructor({
    chainId,
    decimals,
    name,
    symbol
  }) {
    super(chainId, decimals, symbol, name);
  }
  get wrapped() {
    const wnative = WNATIVE[this.chainId];
    invariant5(!!wnative, "WRAPPED");
    return wnative;
  }
  static onChain(chainId) {
    if (chainId in this.cache) {
      return this.cache[chainId];
    }
    invariant5(!!NATIVE[chainId], "NATIVE_CURRENCY");
    const { decimals, name, symbol } = NATIVE[chainId];
    return this.cache[chainId] = new _Native({ chainId, decimals, symbol, name });
  }
  equals(other) {
    return other.isNative && other.chainId === this.chainId;
  }
};
var Native = _Native;
Native.cache = {};

// src/router.ts
import { TradeType as TradeType2 } from "@pancakeswap/swap-sdk-core";
import invariant6 from "tiny-invariant";
function toHex(currencyAmount) {
  return `0x${currencyAmount.quotient.toString(16)}`;
}
var ZERO_HEX = "0x0";
var Router = class {
  /**
   * Cannot be constructed.
   */
  constructor() {
  }
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */
  static swapCallParameters(trade, options) {
    const etherIn = trade.inputAmount.currency.isNative;
    const etherOut = trade.outputAmount.currency.isNative;
    invariant6(!(etherIn && etherOut), "ETHER_IN_OUT");
    invariant6(!("ttl" in options) || options.ttl > 0, "TTL");
    const to = validateAndParseAddress(options.recipient);
    const amountIn = toHex(trade.maximumAmountIn(options.allowedSlippage));
    const amountOut = toHex(trade.minimumAmountOut(options.allowedSlippage));
    const path = trade.route.path.map((token) => token.address);
    const deadline = "ttl" in options ? `0x${(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3) + options.ttl).toString(16)}` : `0x${options.deadline.toString(16)}`;
    const useFeeOnTransfer = Boolean(options.feeOnTransfer);
    let methodName;
    let args;
    let value;
    switch (trade.tradeType) {
      case TradeType2.EXACT_INPUT:
        if (etherIn) {
          methodName = useFeeOnTransfer ? "swapExactETHForTokensSupportingFeeOnTransferTokens" : "swapExactETHForTokens";
          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = useFeeOnTransfer ? "swapExactTokensForETHSupportingFeeOnTransferTokens" : "swapExactTokensForETH";
          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = useFeeOnTransfer ? "swapExactTokensForTokensSupportingFeeOnTransferTokens" : "swapExactTokensForTokens";
          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        }
        break;
      case TradeType2.EXACT_OUTPUT:
        invariant6(!useFeeOnTransfer, "EXACT_OUT_FOT");
        if (etherIn) {
          methodName = "swapETHForExactTokens";
          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = "swapTokensForExactETH";
          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = "swapTokensForExactTokens";
          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        }
        break;
    }
    return {
      methodName,
      args,
      value
    };
  }
};

// src/index.ts
export * from "@pancakeswap/swap-sdk-core";
export {
  ChainId,
  ERC20Token,
  FACTORY_ADDRESS,
  FACTORY_ADDRESS_MAP,
  INIT_CODE_HASH,
  INIT_CODE_HASH_MAP,
  JSBI2 as JSBI,
  NATIVE,
  Native,
  ONE_HUNDRED_PERCENT,
  Pair,
  Route,
  Router,
  Trade,
  WBNB,
  WETH9,
  WNATIVE,
  ZERO_PERCENT,
  computePairAddress,
  inputOutputComparator,
  isTradeBetter,
  tradeComparator
};
