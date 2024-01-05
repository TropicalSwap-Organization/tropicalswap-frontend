import { ChainId, ERC20Token } from "@pancakeswap/sdk";

export const CAKE_MAINNET = new ERC20Token(
  ChainId.BSC,
  "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
  18,
  "CAKE",
  "PancakeSwap Token",
  "https://pancakeswap.finance/"
);

export const METH_MNT = new ERC20Token(
  ChainId.MANTLE,
  '0xcDA86A272531e8640cD7F1a92c01839911B90bb0',
  18,
  'mETH',
  'mETH',
  'https://tropilcalswap.netlify.app/images/symbol/mETH.png'
)

/* export const PAPPLE_MANTLE = new ERC20Token(
  ChainId.MANTLE_TESTNET,
  "0xfcf5c02cA529081d65E40C3F770a2123c8300aA4",
  18,
  "PAPPLE",
  "Pineapple",
); */

export const CAKE_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  "0xFa60D973F7642B748046464e165A65B7323b0DEE",
  18,
  "CAKE",
  "PancakeSwap Token",
  "https://pancakeswap.finance/"
);

export const PAPPLE_TESTNET = new ERC20Token(
  ChainId.MANTLE_TESTNET,
  '0x52DB3e3C513F3258f59456865F0e446837A6d2Be',
  18,
  'PAPPLE',
  'Pineapple',
)

export const PAPPLE_MNT = new ERC20Token(
  ChainId.MANTLE,
  '0x52DB3e3C513F3258f59456865F0e446837A6d2Be',
  18,
  'PAPPLE',
  'Pineapple',
)

export const USDC_BSC = new ERC20Token(
  ChainId.BSC,
  "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  18,
  "USDC",
  "Binance-Peg USD Coin",
  "https://www.centre.io/usdc"
);

export const USDC_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  "0x64544969ed7EBf5f083679233325356EbE738930",
  18,
  "USDC",
  "Binance-Peg USD Coin",
  "https://www.centre.io/usdc"
);

export const USDC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  6,
  "USDC",
  "USD Coin"
);

export const USDC_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
  6,
  "tUSDC",
  "test USD Coin"
);

/* export const USDC_MNT = new ERC20Token(
  ChainId.MANTLE_TESTNET,
  "0x6F971137752B3eD21C23FEf40fa51AdCDc837028",
  6,
  "USDC",
  "USD Coin"
); */

export const USDC_MNT = new ERC20Token(
  ChainId.MANTLE,
  "0x09bc4e0d864854c6afb6eb9a9cdf58ac190d0df9",
  6,
  "USDC",
  "USD Coin",
  "https://tropilcalswap.netlify.app/images/symbol/USDC.png"
);

export const USDT_BSC = new ERC20Token(
  ChainId.BSC,
  "0x55d398326f99059fF775485246999027B3197955",
  18,
  "USDT",
  "Tether USD",
  "https://tether.to/"
);

/* export const USDT_MNT = new ERC20Token(
  ChainId.MANTLE_TESTNET,
  "0x201eba5cc46d216ce6dc03f6a759e8e766e956ae",
  18,
  "USDT",
  "Tether USD",
  "https://tether.to/"
); */

export const USDT_MNT = new ERC20Token(
  ChainId.MANTLE,
  "0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE",
  18,
  "USDT",
  "Tether USD",
  "https://tropilcalswap.netlify.app/images/symbol/USDT.png"
);

export const USDT_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  6,
  "USDT",
  "Tether USD",
  "https://tether.to/"
);

export const BUSD_BSC = new ERC20Token(
  ChainId.BSC,
  "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
);

export const BUSD_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  "0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
);

export const BUSD_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
);

export const BUSD_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  "0xb809b9B2dc5e93CB863176Ea2D565425B03c0540",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
);

/* export const BUSD_MNT = new ERC20Token(
  ChainId.MANTLE_TESTNET,
  "0x40e5c8045cd0a652c2bf94d4d383e7f38eed2cef",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
); */

export const BUSD_MNT = new ERC20Token(
  ChainId.MANTLE,
  "0x40e5c8045cd0a652c2bf94d4d383e7f38eed2cef",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
);

export const BUSD: Record<ChainId, ERC20Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
  [ChainId.MANTLE_TESTNET]: BUSD_MNT,
  [ChainId.MANTLE]: BUSD_MNT,
};

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
/*   [ChainId.MANTLE_TESTNET]: PAPPLE_MANTLE, */
};

export const PAPPLE = {
  [ChainId.MANTLE_TESTNET]: PAPPLE_TESTNET,
  [ChainId.MANTLE]: PAPPLE_MNT
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.GOERLI]: USDC_GOERLI,
  [ChainId.MANTLE]: USDC_MNT
/*   [ChainId.MANTLE_TESTNET]: USDC_MNT,
  [ChainId.MANTLE]: USDC_MNT, */
};

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
  /* [ChainId.MANTLE_TESTNET]: USDT_MNT, */
  [ChainId.MANTLE]: USDT_MNT,
};

export const WBTC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  8,
  "WBTC",
  "Wrapped BTC"
);

// export const PAPPLE_MANTLE = new ERC20Token(
//   ChainId.MANTLE_TESTNET,
//   '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
//   18,
//   'PAPPLE',
//   'Papple',
// )
