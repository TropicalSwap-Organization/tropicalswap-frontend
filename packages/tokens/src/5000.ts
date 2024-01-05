import { ChainId, ERC20Token } from '@pancakeswap/sdk'
import { USDC, USDT, USDT_MNT } from '@pancakeswap/tokens'

export const mantleTokens = {
  mnt: USDT_MNT,
  usdt: USDT[ChainId.MANTLE],
  usdc: USDC[ChainId.MANTLE],
}
