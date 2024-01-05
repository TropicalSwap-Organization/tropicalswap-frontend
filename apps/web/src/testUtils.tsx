/* eslint-disable class-methods-use-this */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { render as rtlRender } from "@testing-library/react";
import noop from "lodash/noop";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { NextRouter } from "next/router";
import Provider from "Providers";
import { initializeStore, makeStore } from "state";
import { SWRConfig } from "swr";
import { vi } from "vitest";
import { WagmiConfig } from "wagmi";
import { client } from "./utils/wagmi";

const mockRouter: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  forward: noop,
  query: {},
  push: vi.fn(),
  replace: vi.fn(),
  reload: vi.fn(),
  back: vi.fn(),
  prefetch: vi.fn(),
  beforePopState: vi.fn(),
  events: {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
};

// eslint-disable-next-line react/display-name
export function renderWithProvider(
  ui,
  {
    preloadedState = undefined,
    store = initializeStore(preloadedState),
    router = {},
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        <Provider store={store}>{children}</Provider>
      </RouterContext.Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// eslint-disable-next-line react/display-name
export const createReduxWrapper = function createReduxWrapper(
  initState = undefined
) {
  function ReduxWrapper({ children }) {
    return <Provider store={makeStore(initState)}>{children}</Provider>;
  }

  ReduxWrapper.displayName = "ReduxWrapper";

  return ReduxWrapper;
};

// eslint-disable-next-line react/display-name
export const createSWRWrapper = function createSWRWrapper(
  fallbackData = undefined
) {
  function SWRWrapper({ children }) {
    return (
      <WagmiConfig client={client}>
        <SWRConfig value={{ fallback: fallbackData }}>{children}</SWRConfig>
      </WagmiConfig>
    );
  }

  SWRWrapper.displayName = "SWRWrapper";

  return SWRWrapper;
};

// lint-disable-next-line react/display-name
export const createWagmiWrapper = function createWagmiWrapper() {
  function WagmiWrapper({ children }) {
    return <WagmiConfig client={client}>{children}</WagmiConfig>;
  }

  WagmiWrapper.displayName = "WagmiWrapper";

  return WagmiWrapper;
};

// re-export everything
export * from "@testing-library/react";
