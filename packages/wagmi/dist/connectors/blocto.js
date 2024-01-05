"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// connectors/blocto/index.ts
var blocto_exports = {};
__export(blocto_exports, {
  BloctoConnector: () => BloctoConnector
});
module.exports = __toCommonJS(blocto_exports);

// connectors/blocto/blocto.ts
var import_wagmi = require("wagmi");
var import_core = require("@wagmi/core");
var import_address = require("@ethersproject/address");
var import_providers = require("@ethersproject/providers");
var chainIdToNetwork = {
  1: "mainnet",
  3: "ropsten",
  4: "rinkeby",
  42: "kovan",
  56: "bsc",
  // BSC Mainnet
  97: "chapel",
  // BSC Testnet
  137: "polygon",
  // Polygon Mainnet
  80001: "mumbai",
  // Polygon Testnet
  43114: "avalanche",
  // Avalanche Mainnet
  43113: "fuji",
  // Avalanche Testnet
  5001: "mantle-testnet",
  // Mantle Testnet
  5e3: "mantle"
  // Mantle
};
var BloctoConnector = class extends import_core.Connector {
  constructor(config = {
    options: { defaultChainId: 56 }
  }) {
    var _a;
    const chains = (_a = config.chains) == null ? void 0 : _a.filter((c) => !!chainIdToNetwork[c.id]);
    super({
      chains,
      options: config.options
    });
    this.id = "blocto";
    this.name = "Blocto";
    this.ready = typeof window !== "undefined";
    this.onAccountsChanged = (accounts) => {
      if (accounts.length === 0)
        this.emit("disconnect");
      else
        this.emit("change", {
          account: (0, import_address.getAddress)(accounts[0])
        });
    };
    this.onChainChanged = (chainId) => {
      const id = (0, import_core.normalizeChainId)(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", { chain: { id, unsupported } });
    };
    this.onDisconnect = () => {
      this.emit("disconnect");
    };
  }
  connect() {
    return __async(this, arguments, function* ({ chainId } = {}) {
      try {
        const provider = yield this.getProvider({ chainId });
        if (!provider)
          throw new import_wagmi.ConnectorNotFoundError();
        if (provider.on) {
          provider.on("accountsChanged", this.onAccountsChanged);
          provider.on("chainChanged", this.onChainChanged);
          provider.on("disconnect", this.onDisconnect);
        }
        this.emit("message", { type: "connecting" });
        const account = yield this.getAccount();
        const id = yield this.getChainId();
        const unsupported = this.isChainUnsupported(id);
        return { account, chain: { id, unsupported }, provider };
      } catch (error) {
        this.disconnect();
        if (this.isUserRejectedRequestError(error))
          throw new import_wagmi.UserRejectedRequestError(error);
        if (error.code === -32002)
          throw new import_wagmi.ResourceUnavailableError(error);
        throw error;
      }
    });
  }
  getProvider() {
    return __async(this, arguments, function* ({ chainId } = {}) {
      if (!this.provider || chainId) {
        const rpc = this.chains.reduce(
          // eslint-disable-next-line @typescript-eslint/no-shadow
          (rpc2, chain) => __spreadProps(__spreadValues({}, rpc2), { [chain.id]: chain.rpcUrls.default.http[0] }),
          {}
        );
        let targetChainId = chainId;
        if (!targetChainId) {
          const fallbackChainId = this.options.defaultChainId;
          if (fallbackChainId && !this.isChainUnsupported(fallbackChainId))
            targetChainId = fallbackChainId;
        }
        if (!targetChainId)
          throw new import_wagmi.ChainNotConfiguredError({ chainId: targetChainId || 0, connectorId: this.id });
        const BloctoSDK = (yield import("@blocto/sdk")).default;
        this.provider = new BloctoSDK({
          appId: this.options.appId,
          ethereum: {
            chainId: targetChainId,
            rpc: rpc[targetChainId]
          }
        }).ethereum;
      }
      if (!this.provider)
        throw new import_wagmi.ConnectorNotFoundError();
      return this.provider;
    });
  }
  isAuthorized() {
    return __async(this, null, function* () {
      try {
        const provider = yield this.getProvider();
        if (!provider)
          throw new import_wagmi.ConnectorNotFoundError();
        const accounts = provider.accounts;
        const account = accounts[0];
        return !!account;
      } catch (e) {
        return false;
      }
    });
  }
  getSigner() {
    return __async(this, arguments, function* ({ chainId } = {}) {
      const [provider, account] = yield Promise.all([this.getProvider({ chainId }), this.getAccount()]);
      return new import_providers.Web3Provider(provider, chainId).getSigner(account);
    });
  }
  getAccount() {
    return __async(this, null, function* () {
      const provider = yield this.getProvider();
      if (!provider)
        throw new import_wagmi.ConnectorNotFoundError();
      const accounts = yield provider.request({
        method: "eth_requestAccounts"
      });
      return (0, import_address.getAddress)(accounts[0]);
    });
  }
  getChainId() {
    return __async(this, null, function* () {
      const provider = yield this.getProvider();
      if (!provider)
        throw new import_wagmi.ConnectorNotFoundError();
      return provider.request({ method: "eth_chainId" }).then(import_core.normalizeChainId);
    });
  }
  disconnect() {
    return __async(this, null, function* () {
      const provider = yield this.getProvider();
      if (!(provider == null ? void 0 : provider.removeListener))
        return;
      provider.removeListener("accountsChanged", this.onAccountsChanged);
      provider.removeListener("chainChanged", this.onChainChanged);
      provider.removeListener("disconnect", this.onDisconnect);
    });
  }
  isUserRejectedRequestError(error) {
    return error.code === 4001;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BloctoConnector
});
