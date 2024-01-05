"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// connectors/miniProgram/index.ts
var miniProgram_exports = {};
__export(miniProgram_exports, {
  MiniProgramConnector: () => MiniProgramConnector
});
module.exports = __toCommonJS(miniProgram_exports);

// connectors/miniProgram/miniProgram.ts
var import_address = require("@ethersproject/address");
var import_wagmi = require("wagmi");
var import_injected = require("wagmi/connectors/injected");
var MiniProgramConnector = class extends import_injected.InjectedConnector {
  constructor({ chains, getWeb3Provider }) {
    const options = {
      name: "BnInjected",
      shimDisconnect: false,
      shimChainChangedDisconnect: false
    };
    super({
      chains,
      options
    });
    this.id = "miniprogram";
    this.ready = typeof window !== "undefined" && !!window.bn;
    this.getWeb3Provider = getWeb3Provider;
  }
  connect() {
    return __async(this, arguments, function* ({ chainId } = {}) {
      try {
        const provider = yield this.getProvider();
        if (!provider)
          throw new import_wagmi.ConnectorNotFoundError();
        if (provider.on) {
          provider.on("accountsChanged", this.onAccountsChanged);
          provider.on("chainChanged", this.onChainChanged);
          provider.on("disconnect", this.onDisconnect);
        }
        this.emit("message", { type: "connecting" });
        const account = yield this.getAccount();
        let id = yield this.getChainId();
        let unsupported = this.isChainUnsupported(id);
        if (chainId && id !== chainId) {
          const chain = yield this.switchChain(chainId);
          id = chain.id;
          unsupported = this.isChainUnsupported(id);
        }
        return { account, chain: { id, unsupported }, provider };
      } catch (error) {
        if (this.isUserRejectedRequestError(error))
          throw new import_wagmi.UserRejectedRequestError(error);
        if (error.code === -32002)
          throw new import_wagmi.ResourceUnavailableError(error);
        throw error;
      }
    });
  }
  getAccount() {
    return __async(this, null, function* () {
      const provider = yield this.getProvider();
      if (!provider)
        throw new import_wagmi.ConnectorNotFoundError();
      const accounts = yield provider.request({
        method: "eth_accounts"
      });
      return (0, import_address.getAddress)(accounts[0]);
    });
  }
  getChainId() {
    return __async(this, null, function* () {
      return 56;
    });
  }
  getProvider() {
    return __async(this, null, function* () {
      if (typeof window !== "undefined") {
        this.provider = this.getWeb3Provider();
      }
      return this.provider;
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MiniProgramConnector
});
