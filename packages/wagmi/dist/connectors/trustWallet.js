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

// connectors/trustWallet/index.ts
var trustWallet_exports = {};
__export(trustWallet_exports, {
  TrustWalletConnector: () => TrustWalletConnector,
  getTrustWalletProvider: () => getTrustWalletProvider
});
module.exports = __toCommonJS(trustWallet_exports);

// connectors/trustWallet/trustWallet.ts
var import_wagmi = require("wagmi");
var import_injected = require("wagmi/connectors/injected");
var import_core = require("@wagmi/core");
var import_address = require("@ethersproject/address");
var mappingNetwork = {
  1: "eth-mainnet",
  5: "eth-goerli",
  56: "bsc-mainnet",
  97: "bsc-testnet",
  5001: "mantle-testnet",
  5e3: "mantle"
};
function getTrustWalletProvider() {
  var _a;
  const isTrustWallet = (ethereum) => {
    const trustWallet = !!ethereum.isTrust;
    return trustWallet;
  };
  const injectedProviderExist = typeof window !== "undefined" && typeof window.ethereum !== "undefined";
  if (!injectedProviderExist) {
    return;
  }
  if (isTrustWallet(window.ethereum)) {
    return window.ethereum;
  }
  if ((_a = window.ethereum) == null ? void 0 : _a.providers) {
    return window.ethereum.providers.find(isTrustWallet);
  }
  return window.trustwallet;
}
var TrustWalletConnector = class extends import_injected.InjectedConnector {
  constructor({
    chains: _chains,
    options: _options
  } = {}) {
    var _a, _b;
    const options = {
      name: "Trust Wallet",
      shimDisconnect: (_a = _options == null ? void 0 : _options.shimDisconnect) != null ? _a : false,
      shimChainChangedDisconnect: (_b = _options == null ? void 0 : _options.shimChainChangedDisconnect) != null ? _b : true
    };
    const chains = _chains == null ? void 0 : _chains.filter((c) => !!mappingNetwork[c.id]);
    super({
      chains,
      options
    });
    this.id = "trustWallet";
  }
  handleFailedConnect(error) {
    if (this.isUserRejectedRequestError(error)) {
      throw new import_wagmi.UserRejectedRequestError(error);
    }
    if (error.code === -32002) {
      throw new import_wagmi.ResourceUnavailableError(error);
    }
    throw error;
  }
  connect() {
    return __async(this, arguments, function* ({ chainId } = {}) {
      var _a, _b, _c, _d;
      try {
        const provider = yield this.getProvider();
        if (!provider) {
          throw new import_wagmi.ConnectorNotFoundError();
        }
        if (provider.on) {
          provider.on("accountsChanged", this.onAccountsChanged);
          provider.on("chainChanged", this.onChainChanged);
          provider.on("disconnect", this.onDisconnect);
        }
        this.emit("message", { type: "connecting" });
        let account = null;
        if (((_a = this.options) == null ? void 0 : _a.shimDisconnect) && !((_b = (0, import_core.getClient)().storage) == null ? void 0 : _b.getItem(this.shimDisconnectKey))) {
          account = yield this.getAccount().catch(() => null);
          const isConnected = !!account;
          if (isConnected) {
            try {
              yield provider.request({
                method: "wallet_requestPermissions",
                params: [{ eth_accounts: {} }]
              });
              account = yield this.getAccount();
            } catch (error) {
              if (this.isUserRejectedRequestError(error)) {
                throw new import_wagmi.UserRejectedRequestError(error);
              }
            }
          }
        }
        if (!account) {
          const accounts = yield provider.request({
            method: "eth_requestAccounts"
          });
          account = (0, import_address.getAddress)(accounts[0]);
        }
        let id = yield this.getChainId();
        let unsupported = this.isChainUnsupported(id);
        if (chainId && id !== chainId) {
          const chain = yield this.switchChain(chainId);
          id = chain.id;
          unsupported = this.isChainUnsupported(id);
        }
        if ((_c = this.options) == null ? void 0 : _c.shimDisconnect) {
          (_d = (0, import_core.getClient)().storage) == null ? void 0 : _d.setItem(this.shimDisconnectKey, true);
        }
        return { account, chain: { id, unsupported }, provider };
      } catch (error) {
        this.handleFailedConnect(error);
      }
    });
  }
  getProvider() {
    return __async(this, null, function* () {
      return getTrustWalletProvider();
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TrustWalletConnector,
  getTrustWalletProvider
});
