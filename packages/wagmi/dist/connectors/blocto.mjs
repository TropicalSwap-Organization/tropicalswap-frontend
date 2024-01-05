import {
  __async,
  __spreadProps,
  __spreadValues
} from "../chunk-2L3ZO4UM.mjs";

// connectors/blocto/blocto.ts
import {
  ConnectorNotFoundError,
  ResourceUnavailableError,
  ChainNotConfiguredError,
  UserRejectedRequestError
} from "wagmi";
import { Connector, normalizeChainId } from "@wagmi/core";
import { getAddress } from "@ethersproject/address";
import { Web3Provider } from "@ethersproject/providers";
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
var BloctoConnector = class extends Connector {
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
          account: getAddress(accounts[0])
        });
    };
    this.onChainChanged = (chainId) => {
      const id = normalizeChainId(chainId);
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
          throw new ConnectorNotFoundError();
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
          throw new UserRejectedRequestError(error);
        if (error.code === -32002)
          throw new ResourceUnavailableError(error);
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
          throw new ChainNotConfiguredError({ chainId: targetChainId || 0, connectorId: this.id });
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
        throw new ConnectorNotFoundError();
      return this.provider;
    });
  }
  isAuthorized() {
    return __async(this, null, function* () {
      try {
        const provider = yield this.getProvider();
        if (!provider)
          throw new ConnectorNotFoundError();
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
      return new Web3Provider(provider, chainId).getSigner(account);
    });
  }
  getAccount() {
    return __async(this, null, function* () {
      const provider = yield this.getProvider();
      if (!provider)
        throw new ConnectorNotFoundError();
      const accounts = yield provider.request({
        method: "eth_requestAccounts"
      });
      return getAddress(accounts[0]);
    });
  }
  getChainId() {
    return __async(this, null, function* () {
      const provider = yield this.getProvider();
      if (!provider)
        throw new ConnectorNotFoundError();
      return provider.request({ method: "eth_chainId" }).then(normalizeChainId);
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
export {
  BloctoConnector
};
