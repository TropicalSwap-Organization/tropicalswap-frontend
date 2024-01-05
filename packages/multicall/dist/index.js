"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// index.ts
var multicall_exports = {};
__export(multicall_exports, {
  createMulticall: () => createMulticall,
  getMulticallContract: () => getMulticallContract,
  multicallAddresses: () => multicallAddresses
});
module.exports = __toCommonJS(multicall_exports);
var import_abi = require("@ethersproject/abi");
var import_contracts = require("@ethersproject/contracts");
var import_sdk = require("@pancakeswap/sdk");

// Multicall.json
var Multicall_default = [
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "target", type: "address" },
          { internalType: "bytes", name: "callData", type: "bytes" }
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate",
    outputs: [
      { internalType: "uint256", name: "blockNumber", type: "uint256" },
      { internalType: "bytes[]", name: "returnData", type: "bytes[]" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "target", type: "address" },
          { internalType: "bool", name: "allowFailure", type: "bool" },
          { internalType: "bytes", name: "callData", type: "bytes" }
        ],
        internalType: "struct Multicall3.Call3[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          { internalType: "bool", name: "success", type: "bool" },
          { internalType: "bytes", name: "returnData", type: "bytes" }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "target", type: "address" },
          { internalType: "bool", name: "allowFailure", type: "bool" },
          { internalType: "uint256", name: "value", type: "uint256" },
          { internalType: "bytes", name: "callData", type: "bytes" }
        ],
        internalType: "struct Multicall3.Call3Value[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3Value",
    outputs: [
      {
        components: [
          { internalType: "bool", name: "success", type: "bool" },
          { internalType: "bytes", name: "returnData", type: "bytes" }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "target", type: "address" },
          { internalType: "bytes", name: "callData", type: "bytes" }
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "blockAndAggregate",
    outputs: [
      { internalType: "uint256", name: "blockNumber", type: "uint256" },
      { internalType: "bytes32", name: "blockHash", type: "bytes32" },
      {
        components: [
          { internalType: "bool", name: "success", type: "bool" },
          { internalType: "bytes", name: "returnData", type: "bytes" }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "getBasefee",
    outputs: [{ internalType: "uint256", name: "basefee", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
    name: "getBlockHash",
    outputs: [{ internalType: "bytes32", name: "blockHash", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getBlockNumber",
    outputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [{ internalType: "uint256", name: "chainid", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [{ internalType: "address", name: "coinbase", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [{ internalType: "uint256", name: "difficulty", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [{ internalType: "uint256", name: "gaslimit", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [{ internalType: "uint256", name: "timestamp", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "addr", type: "address" }],
    name: "getEthBalance",
    outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [{ internalType: "bytes32", name: "blockHash", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bool", name: "requireSuccess", type: "bool" },
      {
        components: [
          { internalType: "address", name: "target", type: "address" },
          { internalType: "bytes", name: "callData", type: "bytes" }
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "tryAggregate",
    outputs: [
      {
        components: [
          { internalType: "bool", name: "success", type: "bool" },
          { internalType: "bytes", name: "returnData", type: "bytes" }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bool", name: "requireSuccess", type: "bool" },
      {
        components: [
          { internalType: "address", name: "target", type: "address" },
          { internalType: "bytes", name: "callData", type: "bytes" }
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      { internalType: "uint256", name: "blockNumber", type: "uint256" },
      { internalType: "bytes32", name: "blockHash", type: "bytes32" },
      {
        components: [
          { internalType: "bool", name: "success", type: "bool" },
          { internalType: "bytes", name: "returnData", type: "bytes" }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  }
];

// index.ts
var multicallAddresses = {
  1: "0xcA11bde05977b3631167028862bE2a173976CA11",
  4: "0xcA11bde05977b3631167028862bE2a173976CA11",
  5: "0xcA11bde05977b3631167028862bE2a173976CA11",
  56: "0xcA11bde05977b3631167028862bE2a173976CA11",
  97: "0xcA11bde05977b3631167028862bE2a173976CA11",
  5001: "0xcA11bde05977b3631167028862bE2a173976CA11",
  5e3: "0xcA11bde05977b3631167028862bE2a173976CA11"
};
var getMulticallContract = (chainId, provider) => {
  if (multicallAddresses[chainId]) {
    return new import_contracts.Contract(multicallAddresses[chainId], Multicall_default, provider);
  }
  return null;
};
function createMulticall(provider) {
  const multicall = (_0, _1, ..._2) => __async(this, [_0, _1, ..._2], function* (abi, calls, chainId = import_sdk.ChainId.MANTLE) {
    const multi = getMulticallContract(chainId, provider({ chainId }));
    if (!multi)
      throw new Error(`Multicall Provider missing for ${chainId}`);
    const itf = new import_abi.Interface(abi);
    const calldata = calls.map((call) => ({
      target: call.address.toLowerCase(),
      callData: itf.encodeFunctionData(call.name, call.params)
    }));
    const { returnData } = yield multi.callStatic.aggregate(calldata);
    const res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call));
    return res;
  });
  const multicallv2 = (_0) => __async(this, [_0], function* ({ abi, calls, chainId = import_sdk.ChainId.MANTLE, options, provider: _provider }) {
    const _a = options || {}, { requireSuccess = true } = _a, overrides = __objRest(_a, ["requireSuccess"]);
    const multi = getMulticallContract(chainId, _provider || provider({ chainId }));
    if (!multi)
      throw new Error(`Multicall Provider missing for ${chainId}`);
    const itf = new import_abi.Interface(abi);
    const calldata = calls.map((call) => ({
      target: call.address.toLowerCase(),
      callData: itf.encodeFunctionData(call.name, call.params)
    }));
    const returnData = yield multi.callStatic.tryAggregate(requireSuccess, calldata, overrides);
    const res = returnData.map((call, i) => {
      const [result, data] = call;
      return result && data !== "0x" ? itf.decodeFunctionResult(calls[i].name, data) : null;
    });
    return res;
  });
  const multicallv3 = (_0) => __async(this, [_0], function* ({ calls, chainId = import_sdk.ChainId.MANTLE, allowFailure, overrides }) {
    const multi = getMulticallContract(chainId, provider({ chainId }));
    if (!multi)
      throw new Error(`Multicall Provider missing for ${chainId}`);
    const interfaceCache = /* @__PURE__ */ new WeakMap();
    const _calls = calls.map(({ abi, address, name, params, allowFailure: _allowFailure }) => {
      let itf = interfaceCache.get(abi);
      if (!itf) {
        itf = new import_abi.Interface(abi);
        interfaceCache.set(abi, itf);
      }
      if (!itf.fragments.some((fragment) => fragment.name === name))
        console.error(`${name} missing on ${address}`);
      const callData = itf.encodeFunctionData(name, params != null ? params : []);
      return {
        target: address.toLowerCase(),
        allowFailure: allowFailure || _allowFailure,
        callData
      };
    });
    const result = yield multi.callStatic.aggregate3(_calls, ...overrides ? [overrides] : []);
    return result.map((call, i) => {
      const { returnData, success } = call;
      if (!success || returnData === "0x")
        return null;
      const { abi, name } = calls[i];
      const itf = interfaceCache.get(abi);
      const decoded = itf == null ? void 0 : itf.decodeFunctionResult(name, returnData);
      return decoded;
    });
  });
  const multicallv3Typed = (_0) => __async(this, [_0], function* ({ calls, allowFailure, chainId, overrides }) {
    return multicallv3({
      // @ts-ignore
      calls,
      allowFailure,
      chainId,
      overrides
    });
  });
  const multicallv2Typed = (_0) => __async(this, [_0], function* ({ abi, calls, chainId, options }) {
    return multicallv2({
      // @ts-ignore
      abi,
      // @ts-ignore
      calls,
      chainId,
      options
    });
  });
  return {
    multicall,
    multicallv2,
    multicallv3,
    multicallv3Typed,
    multicallv2Typed
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createMulticall,
  getMulticallContract,
  multicallAddresses
});
