export const PANCAKE_EXTENDED = 'https://tokens.pancakeswap.finance/pancakeswap-extended.json'
export const COINGECKO = 'https://tokens.pancakeswap.finance/coingecko.json'
export const PANCAKE_ETH_DEFAULT = 'https://tokens.pancakeswap.finance/pancakeswap-eth-default.json'
export const PANCAKE_ETH_MM = 'https://tokens.pancakeswap.finance/pancakeswap-eth-mm.json'
export const PANCAKE_BSC_MM = 'https://tokens.pancakeswap.finance/pancakeswap-bnb-mm.json'
export const COINGECKO_ETH = 'https://tokens.coingecko.com/uniswap/all.json'
export const CMC = 'https://tokens.pancakeswap.finance/cmc.json'

// export const MANTLE_TESTNET = {
//   name: 'PancakeSwap Ethereum Default',
//   timestamp: '2023-09-21T11:50:26.697Z',
//   version: {
//     major: 1,
//     minor: 0,
//     patch: 30,
//   },
//   logoURI: 'https://pancakeswap.finance/logo.png',
//   keywords: ['pancakeswap', 'default', 'ethereum', 'mantle'],
//   tokens: [
//     {
//       name: 'Wrapped Ether',
//       symbol: 'WETH',
//       address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//       chainId: 5001,
//       decimals: 18,
//       logoURI: 'https://tokens.pancakeswap.finance/images/eth/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2.png',
//     },
//     {
//       name: 'USD Coin',
//       symbol: 'USDC',
//       address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
//       chainId: 5001,
//       decimals: 6,
//       logoURI: 'https://tokens.pancakeswap.finance/images/eth/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48.png',
//     },
//   ],
// }

export const ETH_URLS = [PANCAKE_ETH_DEFAULT, PANCAKE_ETH_MM, COINGECKO_ETH]
export const BSC_URLS = [PANCAKE_EXTENDED, CMC, COINGECKO, PANCAKE_BSC_MM]
export const MANTLE_URLS = [PANCAKE_ETH_DEFAULT]

// List of official tokens list
export const OFFICIAL_LISTS = [PANCAKE_EXTENDED, PANCAKE_ETH_DEFAULT, PANCAKE_ETH_MM]

export const UNSUPPORTED_LIST_URLS: string[] = []
export const WARNING_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  ...BSC_URLS,
  ...ETH_URLS,
  ...MANTLE_URLS,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
  ...WARNING_LIST_URLS,
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [PANCAKE_EXTENDED, PANCAKE_ETH_DEFAULT, PANCAKE_ETH_MM]
