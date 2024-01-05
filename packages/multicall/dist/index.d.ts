import { Contract, CallOverrides } from '@ethersproject/contracts';
import { Provider } from '@ethersproject/providers';
import { ChainId } from '@pancakeswap/sdk';
import { Multicallv3Typed, Multicallv2Typed } from '@pancakeswap/utils/abitype';

declare const multicallAddresses: {
    1: string;
    4: string;
    5: string;
    56: string;
    97: string;
    5001: string;
    5000: string;
};
declare const getMulticallContract: (chainId: ChainId, provider: Provider) => Contract | null;
interface Call {
    address: string;
    name: string;
    params?: any[];
}
interface MulticallOptions extends CallOverrides {
    requireSuccess?: boolean;
}
/**
 * Multicall V2 uses the new "tryAggregate" function. It is different in 2 ways
 *
 * 1. If "requireSuccess" is false multicall will not bail out if one of the calls fails
 * 2. The return includes a boolean whether the call was successful e.g. [wasSuccessful, callResult]
 */
interface MulticallV2Params {
    abi: any[];
    calls: Call[];
    chainId?: ChainId;
    options?: MulticallOptions;
    provider?: Provider;
}
interface CallV3 extends Call {
    abi: any[];
    allowFailure?: boolean;
}
interface MulticallV3Params {
    calls: CallV3[];
    chainId?: ChainId;
    allowFailure?: boolean;
    overrides?: CallOverrides;
}
type MultiCallV2 = <T = any>(params: MulticallV2Params) => Promise<T>;
type MultiCall = <T = any>(abi: any[], calls: Call[], chainId?: ChainId) => Promise<T>;
declare function createMulticall<TProvider extends Provider>(provider: ({ chainId }: {
    chainId?: number | undefined;
}) => TProvider): {
    multicall: MultiCall;
    multicallv2: MultiCallV2;
    multicallv3: ({ calls, chainId, allowFailure, overrides }: MulticallV3Params) => Promise<any>;
    multicallv3Typed: typeof Multicallv3Typed;
    multicallv2Typed: typeof Multicallv2Typed;
};

export { Call, CallV3, MultiCall, MultiCallV2, MulticallOptions, createMulticall, getMulticallContract, multicallAddresses };
