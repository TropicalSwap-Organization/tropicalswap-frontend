import { useTranslation } from "@pancakeswap/localization";
import { Text } from "../../../../../components/Text";
import { Button } from "../../../../../components/Button";
import { StyledActionContainer, ActionContent, ActionTitles } from "./styles";

interface EnableStakeActionProps {
  pendingTx: boolean;
  handleApprove: () => void;
}

const EnableStakeAction: React.FunctionComponent<React.PropsWithChildren<EnableStakeActionProps>> = ({
  pendingTx,
  handleApprove,
}) => {
  const { t } = useTranslation();

  return (
    <StyledActionContainer>
      <ActionTitles>
        <Text bold textTransform="uppercase" color="#C54177" fontSize="12px" style={{ color: "#C54177" }}>
          {t("Enable Farm")}
        </Text>
      </ActionTitles>
      <ActionContent>
        <Button
          width="100%"
          disabled={pendingTx}
          onClick={handleApprove}
          variant="secondary"
          style={{ background: "#FFBF00", color: "#400C8B", border: "none" }}
        >
          {t("Enable")}
        </Button>
      </ActionContent>
    </StyledActionContainer>
  );
};

export default EnableStakeAction;
