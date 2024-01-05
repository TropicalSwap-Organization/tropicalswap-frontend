import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'
import { USDC, USDT, USDT_MNT, WBTC_ETH } from '@pancakeswap/tokens'

export const mantleTestnetTokens = {
  mnt: USDT_MNT,
  pineapple: new ERC20Token(
    ChainId.MANTLE_TESTNET,
    '0x52db3e3c513f3258f59456865f0e446837a6d2be',
    18,
    'Pineapple',
    'PAPPLE',
  ),
  TropicalReward1: new ERC20Token(
    ChainId.MANTLE_TESTNET,
    '0xD4308D50E95a41c17e27808f5E786e172d39A0D2',
    18,
    'TropicalReward1',
    'TR1',
  ),
  wmnt: new ERC20Token(
    ChainId.MANTLE_TESTNET,
    '0x8734110e5e1dcf439c7f549db740e546fea82d66',
    18,
    'WBIT',
    'Wrapped BIT',
  ),
  usdc: new ERC20Token(
    ChainId.MANTLE_TESTNET,
    '0x6F971137752B3eD21C23FEf40fa51AdCDc837028',
    6,
    'USDC',
    'USDC Clone',
),
  // weth: WETH9[ChainId.ETHEREUM],
  // usdt: USDT[ChainId.MANTLE_TESTNET],
  // usdc: USDC[ChainId.MANTLE_TESTNET],
  t1: new ERC20Token(
    ChainId.MANTLE_TESTNET,
    '0x5438D1e4445bB3C720fB2D9A5b7ee6235fE25511',
    18,
    'T1',
    'Token1',
    'https://www.paxos.com/busd/',
  ),
  t2: new ERC20Token(
    ChainId.MANTLE_TESTNET,
    '0xBE84157763fb3A2Bd335e0cd2ccfD754b4e5E8C3',
    18,
    'T2',
    'Token2',
    'https://www.paxos.com/busd/',
  ),
  // wbtc: WBTC_ETH,
}
