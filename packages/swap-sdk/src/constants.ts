import { Percent } from '@pancakeswap/swap-sdk-core'
import { ERC20Token } from './entities/token'

export enum ChainId {
  ETHEREUM = 1,
  GOERLI = 5,
  BSC = 56,
  BSC_TESTNET = 97,
  MANTLE_TESTNET = 5001,
  MANTLE = 5000,
}

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'

const FACTORY_ADDRESS_ETH = '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362'

const FACTORY_ADDRESS_MNT_TEST = "0x3A25B0dB8D1b7bc3F789ceA51cf08E2Cc449F6f3"
// Mantle mainnet
const FACTORY_ADDRESS_MNT = "0x5B54d3610ec3f7FB1d5B42Ccf4DF0fB4e136f249"

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: FACTORY_ADDRESS_ETH,
  [ChainId.GOERLI]: FACTORY_ADDRESS_ETH,
  [ChainId.BSC]: FACTORY_ADDRESS,
  [ChainId.BSC_TESTNET]: '0x6725f303b657a9451d8ba641348b6761a6cc7a17',
  [ChainId.MANTLE_TESTNET]: FACTORY_ADDRESS_MNT_TEST,
  [ChainId.MANTLE]: FACTORY_ADDRESS_MNT,
}
export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'

const INIT_CODE_HASH_ETH = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: INIT_CODE_HASH_ETH,
  [ChainId.GOERLI]: INIT_CODE_HASH_ETH,
  [ChainId.BSC]: INIT_CODE_HASH,
  [ChainId.BSC_TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  [ChainId.MANTLE_TESTNET]: '0x321aea434584ceee22f77514cbdc4c631d3feba4b643c492f852c922a409ed1e',
  [ChainId.MANTLE]: '0x321aea434584ceee22f77514cbdc4c631d3feba4b643c492f852c922a409ed1e'
}

export const WETH9 = {
  [ChainId.ETHEREUM]: new ERC20Token(
    ChainId.ETHEREUM,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.GOERLI]: new ERC20Token(
    ChainId.GOERLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.MANTLE_TESTNET]: new ERC20Token(
    ChainId.MANTLE_TESTNET,
    '0x8734110e5e1dcF439c7F549db740E546fea82d66',
    18,
    'WBIT',
    'Wrapped BIT',
  ),
  [ChainId.MANTLE]: new ERC20Token(
    ChainId.MANTLE,
    '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',
    18,
    'MNT',
    'Mantle',
  )
}

export const WBNB = {
  [ChainId.ETHEREUM]: new ERC20Token(
    ChainId.ETHEREUM,
    '0x418D75f65a02b3D53B2418FB8E1fe493759c7605',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC]: new ERC20Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC_TESTNET]: new ERC20Token(
    ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  // [ChainId.MANTLE_TESTNET]: new ERC20Token(
  //   ChainId.MANTLE_TESTNET,
  //   '0x1234567890123456789012345678901234567890',
  //   18,
  //   'WBNB',
  //   'Wrapped BNB (Mantle Testnet)',
  //   'https://www.binance.org'
  // )
}

export const WNATIVE: Record<number, ERC20Token> = {
  [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM],
  [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
  [ChainId.BSC]: WBNB[ChainId.BSC],
  [ChainId.BSC_TESTNET]: WBNB[ChainId.BSC_TESTNET],
  [ChainId.MANTLE_TESTNET]: WETH9[ChainId.MANTLE_TESTNET],
  [ChainId.MANTLE]: WETH9[ChainId.MANTLE]
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.ETHEREUM]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.GOERLI]: { name: 'Goerli Ether', symbol: 'GOR', decimals: 18 },
  [ChainId.BSC]: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18
  },
  [ChainId.BSC_TESTNET]: {
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
    decimals: 18
  },
  [ChainId.MANTLE_TESTNET]: {
    name: 'Mantle Testnet',
    symbol: 'MNT',
    decimals: 18
  },
  [ChainId.MANTLE]: {
    name: 'Mantle',
    symbol: 'MNT',
    decimals: 18
  }
}
