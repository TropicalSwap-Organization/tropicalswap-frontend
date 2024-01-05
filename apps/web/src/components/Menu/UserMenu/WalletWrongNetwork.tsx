import styled from "styled-components";
import { useTranslation } from "@pancakeswap/localization";
import {
  Button,
  Text,
  Link,
  HelpIcon,
  Message,
  MessageText,
} from "@pancakeswap/uikit";
import { ChainId } from "@pancakeswap/sdk";
import { useSwitchNetwork } from "hooks/useSwitchNetwork";

const StyledLink = styled(Link)`
  width: 100%;
  &:hover {
    text-decoration: initial;
  }
`;

interface WalletWrongNetworkProps {
  onDismiss: () => void;
}

const WalletWrongNetwork: React.FC<
  React.PropsWithChildren<WalletWrongNetworkProps>
> = ({ onDismiss }) => {
  const { t } = useTranslation();
  const { switchNetworkAsync, canSwitch } = useSwitchNetwork();

  const handleSwitchNetwork = async (): Promise<void> => {
    await switchNetworkAsync(ChainId.MANTLE);
    onDismiss?.();
  };

  return (
    <>
      <Text mb="24px" style={{ color: "#400C8B" }}>
        {t("You’re connected to the wrong network.")}
      </Text>
      {canSwitch ? (
        <Button
          onClick={handleSwitchNetwork}
          mb="24px"
          style={{ boxShadow: "none" }}
        >
          {t("Switch Network")}
        </Button>
      ) : (
        <Message variant="danger">
          <MessageText>
            {t("Unable to switch network. Please try it on your wallet")}
          </MessageText>
        </Message>
      )}
      {/*   <StyledLink href="https://docs.pancakeswap.finance/get-started/connection-guide" external> */}
      <StyledLink external>
        <Button
          width="100%"
          variant="secondary"
          style={{ color: "#400C8B", border: "2px solid #400C8B" }}
        >
          {t("Learn How")}
          <HelpIcon color="#C54177" ml="6px" />
        </Button>
      </StyledLink>
    </>
  );
};

export default WalletWrongNetwork;
