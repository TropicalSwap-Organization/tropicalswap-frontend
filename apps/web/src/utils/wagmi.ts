import { BinanceWalletConnector } from "@pancakeswap/wagmi/connectors/binanceWallet";
import { BloctoConnector } from "@pancakeswap/wagmi/connectors/blocto";
import { TrustWalletConnector } from "@pancakeswap/wagmi/connectors/trustWallet";
import { bsc, bscTestnet, goerli, mainnet } from "wagmi/chains";
import { Chain, configureChains, createClient } from "wagmi";
import memoize from "lodash/memoize";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { LedgerConnector } from "wagmi/connectors/ledger";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { SafeConnector } from "./safeConnector";

// const CHAINS = [bsc, mainnet, bscTestnet, goerli]

const CHAINS: Chain[] = [
  /*  mainnet, */
  {
    id: 5000,
    name: "Mantle",
    network: "mantle",
    rpcUrls: {
      /* default: { http: ["https://rpc.mantle.xyz"] */
      default: { http: ["https://mantle.publicnode.com"] },
    },
    blockExplorers: {
      default: {
        name: "Mantle Explorer",
        url: "https://explorer.mantle.xyz",
      },
    },
    nativeCurrency: {
      name: "Mantle",
      symbol: "MNT",
      decimals: 18,
    },
    /*     contracts: {
      multicall3: {
        address: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
 blockCreated: 13214553, 
      },
    }, */
  },
  /*  {
    id: 5001,
    name: "Mantle Testnet",
    network: "mantle-testnet",
    rpcUrls: {
      default: { http: ["https://rpc.testnet.mantle.xyz"] },
    },
    blockExplorers: {
      default: {
        name: "Mantle Explorer",
        url: "https://explorer.testnet.mantle.xyz",
      },
    },
    nativeCurrency: {
      name: "Mantle Testnet",
      symbol: "MNT",
      decimals: 18,
    },
    contracts: {
      multicall3: {
        address: "0xa3ecFaa623bb7Ad7C420A0F74a371591575F759e",
        blockCreated: 13214553,
      },
    },
  }, */
];

const getNodeRealUrl = (networkName: string) => {
  let host = null;

  switch (networkName) {
    case "homestead":
      if (process.env.NEXT_PUBLIC_NODE_REAL_API_ETH) {
        host = `eth-mainnet.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_ETH}`;
      }
      break;
    case "goerli":
      if (process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI) {
        host = `eth-goerli.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI}`;
      }
      break;
    default:
      host = null;
  }

  if (!host) {
    return null;
  }

  const url = `https://${host}`;
  return {
    http: url,
    webSocket: url
      .replace(/^http/i, "wss")
      .replace(".nodereal.io/v1", ".nodereal.io/ws/v1"),
  };
};

export const { provider, chains } = configureChains(CHAINS, [
  jsonRpcProvider({
    rpc: (chain) => {
      if (!!process.env.NEXT_PUBLIC_NODE_PRODUCTION && chain.id === bsc.id) {
        return { http: process.env.NEXT_PUBLIC_NODE_PRODUCTION };
      }
      // if (chain.id === 5001) {
      //   return { http: "https://rpc.testnet.mantle.xyz" };
      // }
      // if (chain.id === 420) {
      //   // Chain ID pour Optimism Goerli Testnet
      //   return { http: 'https://optimism-goerli.publicnode.com' }
      // }
      if (process.env.NODE_ENV === "test" && chain.id === mainnet.id) {
        return { http: "https://cloudflare-eth.com" };
      }

      return (
        getNodeRealUrl(chain.network) || { http: chain.rpcUrls.default.http[0] }
      );
    },
  }),
]);

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
});

export const coinbaseConnector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: "PancakeSwap",
    appLogoUrl: "https://pancakeswap.com/logo.png",
  },
});

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: true,
  },
});

export const walletConnectNoQrCodeConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: false,
  },
});

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
});

const bloctoConnector = new BloctoConnector({
  chains,
  options: {
    defaultChainId: 5001,
    appId: "e2f2f0cd-3ceb-4dec-b293-bb555f2ed5af",
  },
});

const ledgerConnector = new LedgerConnector({
  chains,
});

export const bscConnector = new BinanceWalletConnector({ chains });

export const trustWalletConnector = new TrustWalletConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
});

export const client = createClient({
  autoConnect: false,
  provider,
  connectors: [
    new SafeConnector({ chains }),
    metaMaskConnector,
    injectedConnector,
    coinbaseConnector,
    walletConnectConnector,
    /*  bscConnector, */
    bloctoConnector,
    ledgerConnector,
    trustWalletConnector,
  ],
});
export const CHAIN_IDS = chains.map((c) => c.id);

export const isChainSupported = memoize((chainId: number) =>
  CHAIN_IDS.includes(chainId)
);
export const isChainTestnet = memoize(
  (chainId: number) => chains.find((c) => c.id === chainId)?.testnet
);
