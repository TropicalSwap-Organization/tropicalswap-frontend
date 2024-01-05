import useActiveWeb3React from "hooks/useActiveWeb3React";
import { Pool } from "@pancakeswap/uikit";
import { vaultPoolConfig } from "config/constants/pools";
import { useCurrentBlock } from "state/block/hooks";
import { getPoolBlockInfo } from "views/Pools/helpers";
import { Token } from "@pancakeswap/sdk";

// lint-disable-next-line react/display-name
// const withShownApr = (AprComp) => (props) => {
//   const { account } = useActiveWeb3React();

//   const currentBlock = useCurrentBlock();

//   const { shouldShowBlockCountdown, hasPoolStarted } = getPoolBlockInfo(
//     props.pool,
//     currentBlock
//   );

//   const autoCompoundFrequency =
//     vaultPoolConfig[props.pool.vaultKey]?.autoCompoundFrequency ?? 0;

//   return (
//     <AprComp
//       {...props}
//       shouldShowApr={hasPoolStarted || !shouldShowBlockCountdown}
//       account={account}
//       autoCompoundFrequency={autoCompoundFrequency}
//     />
//   );

// };

// export default withShownApr(Pool.Apr<Token>);

const withShownApr = (AprComp) => {
  function WithShownApr(props) {
    const { account } = useActiveWeb3React();

    const currentBlock = useCurrentBlock();

    const { shouldShowBlockCountdown, hasPoolStarted } = getPoolBlockInfo(
      props.pool,
      currentBlock
    );

    const autoCompoundFrequency =
      vaultPoolConfig[props.pool.vaultKey]?.autoCompoundFrequency ?? 0;

    return (
      <AprComp
        {...props}
        shouldShowApr={hasPoolStarted || !shouldShowBlockCountdown}
        account={account}
        autoCompoundFrequency={autoCompoundFrequency}
      />
    );
  }

  WithShownApr.displayName = `WithShownApr(${
    AprComp.displayName || AprComp.name || "Component"
  })`;

  return WithShownApr;
};

export default withShownApr(Pool.Apr<Token>);