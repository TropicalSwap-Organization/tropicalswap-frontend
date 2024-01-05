import { mantleTestnetTokens, mantleTokens} from '@pancakeswap/tokens'
import { SerializedFarmConfig, FarmConfigBaseProps } from '@pancakeswap/farms'
import {ChainId, ERC20Token} from "@pancakeswap/sdk";

// const farms : FarmConfigBaseProps[] = [
// {
//   pid : 0,
//   lpSymbol : 'PAPPLE',
//   lpAddress : '0x52DB3e3C513F3258f59456865F0e446837A6d2Be',
// },
// {
//   pid : 1,
//   lpSymbol : 'lp1',
//   lpAddress : '0x909Eabe672B380ba53e124e4165A3595A280d7bA',
// },
// {
//   pid : 2,
//   lpSymbol : 'lp2',
//   lpAddress : '0xb7886375cc9c6f17997ebb7572be765ce856f16e',
// }
// ].map((p) => ({ ...p}))
const farms: SerializedFarmConfig[] = [
   {
     pid: 2,
     vaultPid: 2,
     lpSymbol: 'MNT-USDC LP',
     lpAddress: '0x2E8135bE71230c6B1B4045696d41C09Db0414226',
     quoteToken: mantleTokens.mnt,
     token: mantleTokens.usdc,
   },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
