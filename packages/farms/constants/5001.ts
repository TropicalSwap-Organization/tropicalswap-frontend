import { mantleTestnetTokens} from '@pancakeswap/tokens'
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
  /*{
     pid: 1,
     vaultPid: 1,
     lpSymbol: 'MNT-USDT LP',
     lpAddress: '0x17C1Ae82D99379240059940093762c5e4539aba5',
     quoteToken: mantleTokens.mnt,
     token: mantleTokens.usdt,
   },
   {
     pid: 2,
     vaultPid: 2,
     lpSymbol: 'MNT-USDC LP',
     lpAddress: '0x2E8135bE71230c6B1B4045696d41C09Db0414226',
     quoteToken: mantleTokens.mnt,
     token: mantleTokens.usdc,
   },*/
/*    {
        pid: 2,
        vaultPid: 2,
        lpSymbol: 'MNT-USDT LP',
        lpAddress: '0x17C1Ae82D99379240059940093762c5e4539aba5',
        quoteToken: mantleTokens.mnt,
        token: mantleTokens.usdt,
    },*/
{
    pid: 0,
    v1pid: 0,
    lpSymbol: 'PAPPLE x PAPPLE',
    lpAddress: '0x52DB3e3C513F3258f59456865F0e446837A6d2Be',
    token: new ERC20Token(
        5001,
        '0x52DB3e3C513F3258f59456865F0e446837A6d2Be',
        18,
        'PAPPLE',
        'Pineapple',
    ),
    quoteToken: new ERC20Token(
        5001,
        '0x52DB3e3C513F3258f59456865F0e446837A6d2Be',
        18,
        'PAPPLE',
        'Pineapple',
    ),
},
{
    pid: 3,
    v1pid: 3,
    lpSymbol: 'T1-WBIT LP',
    lpAddress: '0x85615311781590caaf611191fc854eb76244cd7a',
    token: new ERC20Token(
        5001,
        '0x5438D1e4445bB3C720fB2D9A5b7ee6235fE25511',
        18,
        'T1',
        'Token1',
    ),
    quoteToken: new ERC20Token(
        5001,
        '0x8734110e5e1dcf439c7f549db740e546fea82d66',
        18,
        'WBIT',
        'Wrapped BIT',
    ),
},
{
    pid: 4,
    v1pid: 4,
    lpSymbol: 'T2-WBIT LP',
    lpAddress: '0x4e3EdC1219Fe44a69fAeeF292Dbe6dAFe93d7FE3',
    token: new ERC20Token(
        5001,
        '0xb7886375Cc9c6f17997eBB7572Be765CE856F16E',
        18,
        'T2',
        'Token2',
    ),
    quoteToken: new ERC20Token(
        5001,
        '0x8734110e5e1dcf439c7f549db740e546fea82d66',
        18,
        'WBIT',
        'Wrapped BIT',
    ),
},
{
    pid: 5,
    v1pid: 5,
    lpSymbol: 'USDC-WBIT LP',
    lpAddress: '0x86a33b3a32603484763c9470907dab1881063eb2',
    token: new ERC20Token(
        5001,
        '0x6F971137752B3eD21C23FEf40fa51AdCDc837028',
        6,
        'USDC',
        'USDC Clone',
    ),
    quoteToken: new ERC20Token(
        5001,
        '0x8734110e5e1dcf439c7f549db740e546fea82d66',
        18,
        'WBIT',
        'Wrapped BIT',
    ),
},
{
    pid: 6,
    v1pid: 6,
    lpSymbol: 'PAPPLE-USDC LP',
    lpAddress: '0xCF7ed4d8eD360983a50BE301617346c4DBA98871',
    token: new ERC20Token(
        5001,
        '0x52DB3e3C513F3258f59456865F0e446837A6d2Be',
        18,
        'PAPPLE',
        'Pineapple',
    ),
    quoteToken: new ERC20Token(
        5001,
        '0x6F971137752B3eD21C23FEf40fa51AdCDc837028',
        6,
        'USDC',
        'USDC Clone',
    ),
}
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
