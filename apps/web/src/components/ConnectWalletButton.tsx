import { useTranslation } from "@pancakeswap/localization";
import { WalletModalV2 } from "@pancakeswap/ui-wallets";
import { Button, ButtonProps } from "@pancakeswap/uikit";
import { createWallets, getDocLink } from "config/wallet";
import { useActiveChainId } from "hooks/useActiveChainId";
import useAuth from "hooks/useAuth";

// import { useActiveHandle } from "hooks/useEagerConnect.bmp.ts";
// import useActiveHandle from "hooks/useEagerConnect";
import { useMemo, useState } from "react";
import { useConnect } from "wagmi";
import Trans from "./Trans";
import { useActiveHandle } from "hooks/useEagerConnect.bmp";

const ConnectWalletButton = ({ children, ...props }: ButtonProps) => {
  const handleActive = useActiveHandle();
  const { login } = useAuth();
  const {
    t,
    currentLanguage: { code },
  } = useTranslation();
  const { connectAsync } = useConnect();
  const { chainId } = useActiveChainId();
  const [open, setOpen] = useState(false);

  const docLink = useMemo(() => getDocLink(code), [code]);

  const handleClick = () => {
    if (typeof __NEZHA_BRIDGE__ !== "undefined") {
      handleActive();
    } else {
      setOpen(true);
    }
  };

  const wallets = useMemo(
    () => createWallets(chainId, connectAsync),
    [chainId, connectAsync]
  );

  return (
    <>
      <Button
        style={{
          background: "#FFBF00",
          color: "#400C8B",
          boxShadow: "none",
          width: "fit-content",
        }}
        onClick={handleClick}
        {...props}
      >
        {children || <Trans>Connect Wallet</Trans>}
      </Button>
      <WalletModalV2
        docText={t("Learn How to Connect")}
        docLink={docLink}
        isOpen={open}
        wallets={wallets}
        login={login}
        onDismiss={() => setOpen(false)}
      />
    </>
  );
};

export default ConnectWalletButton;
