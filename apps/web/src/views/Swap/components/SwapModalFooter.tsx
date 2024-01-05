import { useMemo, useState } from "react";
import styled from "styled-components";
import { Trade, TradeType, CurrencyAmount, Currency } from "@pancakeswap/sdk";
import {
  Button,
  Text,
  AutoRenewIcon,
  QuestionHelper,
  AutoColumn,
} from "@pancakeswap/uikit";
import { useTranslation } from "@pancakeswap/localization";
import { Field } from "state/swap/actions";
import {
  computeTradePriceBreakdown,
  formatExecutionPrice,
  warningSeverity,
} from "utils/exchange";
import { AutoRow, RowBetween, RowFixed } from "components/Layout/Row";
import {
  TOTAL_FEE,
  LP_HOLDERS_FEE,
  TREASURY_FEE,
  BUYBACK_FEE,
} from "config/constants/info";
import FormattedPriceImpact from "./FormattedPriceImpact";
import { StyledBalanceMaxMini, SwapCallbackError } from "./styleds";

/*const SwapModalFooterContainer = styled(AutoColumn)`
  margin-top: 24px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.default};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background-color: ${({ theme }) => theme.colors.background};
`*/

const SwapModalFooterContainer = styled(AutoColumn)`
  margin-top: 24px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.default};
  background-color: #f7f7f7;
`;

export default function SwapModalFooter({
  trade,
  slippageAdjustedAmounts,
  isEnoughInputBalance,
  onConfirm,
  swapErrorMessage,
  disabledConfirm,
}: {
  trade: Trade<Currency, Currency, TradeType>;
  slippageAdjustedAmounts: { [field in Field]?: CurrencyAmount<Currency> };
  isEnoughInputBalance: boolean;
  onConfirm: () => void;
  swapErrorMessage?: string | undefined;
  disabledConfirm: boolean;
}) {
  const { t } = useTranslation();
  const [showInverted, setShowInverted] = useState<boolean>(false);
  const { priceImpactWithoutFee, realizedLPFee } = useMemo(
    () => computeTradePriceBreakdown(trade),
    [trade]
  );
  const severity = warningSeverity(priceImpactWithoutFee);

  const totalFeePercent = `${(TOTAL_FEE * 100).toFixed(2)}%`;
  const lpHoldersFeePercent = `${(LP_HOLDERS_FEE * 100).toFixed(2)}%`;
  const treasuryFeePercent = `${(TREASURY_FEE * 100).toFixed(4)}%`;
  const buyBackFeePercent = `${(BUYBACK_FEE * 100).toFixed(4)}%`;

  return (
    <>
      <SwapModalFooterContainer>
        <RowBetween align="center">
          <Text style={{ color: "#400C8B" }} fontSize="14px">
            {t("Price")}
          </Text>
          <Text
            fontSize="14px"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textAlign: "right",
              paddingLeft: "10px",
              color: "#400C8B",
            }}
          >
            {formatExecutionPrice(trade, showInverted)}
            <StyledBalanceMaxMini
              style={{ background: "#F7F7F7" }}
              onClick={() => setShowInverted(!showInverted)}
            >
              <AutoRenewIcon width="14px" style={{ color: "#400C8B" }} />
            </StyledBalanceMaxMini>
          </Text>
        </RowBetween>

        <RowBetween>
          <RowFixed>
            <Text style={{ color: "#400C8B" }} color="#400C8B" fontSize="14px">
              {trade.tradeType === TradeType.EXACT_INPUT
                ? t("Minimum Received")
                : t("Maximum Sold")}
            </Text>
            <QuestionHelper
              text={t(
                "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
              )}
              ml="4px"
              placement="top"
              color="#400C8B"
            />
          </RowFixed>
          <RowFixed>
            <Text fontSize="14px" style={{ color: "#400C8B" }}>
              {trade.tradeType === TradeType.EXACT_INPUT
                ? slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4) ?? "-"
                : slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4) ?? "-"}
            </Text>
            <Text fontSize="14px" marginLeft="4px" style={{ color: "#400C8B" }}>
              {trade.tradeType === TradeType.EXACT_INPUT
                ? trade.outputAmount.currency.symbol
                : trade.inputAmount.currency.symbol}
            </Text>
          </RowFixed>
        </RowBetween>
        <RowBetween>
          <RowFixed>
            <Text fontSize="14px" style={{ color: "#400C8B" }}>
              {t("Price Impact")}
            </Text>
            <QuestionHelper
              text={t(
                "The difference between the market price and your price due to trade size."
              )}
              ml="4px"
              placement="top"
              color="#400C8B"
            />
          </RowFixed>
          <FormattedPriceImpact priceImpact={priceImpactWithoutFee} />
        </RowBetween>
        <RowBetween>
          <RowFixed>
            <Text style={{ color: "#400C8B" }} fontSize="14px">
              {t("Liquidity Provider Fee")}
            </Text>
            <QuestionHelper
              text={
                <>
                  <Text mb="12px">
                    {t("For each trade a %amount% fee is paid", {
                      amount: totalFeePercent,
                    })}
                  </Text>
                  <Text>
                    -{" "}
                    {t("%amount% to LP token holders", {
                      amount: lpHoldersFeePercent,
                    })}
                  </Text>
                  <Text>
                    -{" "}
                    {t("%amount% to the Treasury", {
                      amount: treasuryFeePercent,
                    })}
                  </Text>
                  <Text>
                    -{" "}
                    {t("%amount% towards PAPPLE buyback and burn", {
                      amount: buyBackFeePercent,
                    })}
                  </Text>
                </>
              }
              ml="4px"
              placement="top"
            />
          </RowFixed>
          <Text fontSize="14px" style={{ color: "#400C8B" }}>
            {realizedLPFee
              ? `${realizedLPFee?.toSignificant(6)} ${
                  trade.inputAmount.currency.symbol
                }`
              : "-"}
          </Text>
        </RowBetween>
      </SwapModalFooterContainer>

      <AutoRow>
        <Button
          /*variant={severity > 2 ? 'danger' : 'primary'}*/
          style={{
            boxShadow: "none",
            background: severity > 2 ? "danger" : "#FFBF00",
            color: severity > 2 ? "danger" : "#400C8B",
          }}
          onClick={onConfirm}
          disabled={disabledConfirm}
          mt="12px"
          id="confirm-swap-or-send"
          width="100%"
        >
          {severity > 2 ||
          (trade.tradeType === TradeType.EXACT_OUTPUT && !isEnoughInputBalance)
            ? t("Swap Anyway")
            : t("Confirm Swap")}
        </Button>

        {swapErrorMessage ? (
          <SwapCallbackError error={swapErrorMessage} />
        ) : null}
      </AutoRow>
    </>
  );
}
