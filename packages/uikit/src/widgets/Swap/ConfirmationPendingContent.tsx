import { useTranslation } from "@pancakeswap/localization";
import styled from "styled-components";
import { AutoColumn, ColumnCenter } from "../../components/Column";
import { Spinner, Text } from "../../components";

const Wrapper = styled.div`
  width: 100%;
`;

const ConfirmedIcon = styled(ColumnCenter)`
  padding: 24px 0;
`;

export function ConfirmationPendingContent({ pendingText }: { pendingText?: string }) {
  const { t } = useTranslation();
  return (
    <Wrapper>
      {/*     <ConfirmedIcon>
        <Spinner />
      </ConfirmedIcon>*/}
      <AutoColumn gap="12px" justify="center">
        {pendingText ? (
          <>
            <Text fontSize="20px" style={{ color: "#400C8B" }}>
              {t("Waiting For Confirmation")}
            </Text>
            <AutoColumn gap="12px" justify="center">
              <Text style={{ color: "#400C8B" }} bold small textAlign="center">
                {pendingText}
              </Text>
            </AutoColumn>
          </>
        ) : null}
        <Text small style={{ color: "#400C8B" }} textAlign="center">
          {t("Confirm this transaction in your wallet")}
        </Text>
      </AutoColumn>
    </Wrapper>
  );
}
