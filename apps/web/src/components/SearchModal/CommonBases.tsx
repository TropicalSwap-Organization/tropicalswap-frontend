import { ChainId, Currency, Token } from "@pancakeswap/sdk";
import { Text, QuestionHelper, AutoColumn } from "@pancakeswap/uikit";
import styled from "styled-components";
import useNativeCurrency from "hooks/useNativeCurrency";
import { useTranslation } from "@pancakeswap/localization";

import { SUGGESTED_BASES } from "config/constants/exchange";
import { AutoRow } from "../Layout/Row";
import { CurrencyLogo } from "../Logo";
import { CommonBasesType } from "./types";

const ButtonWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
`;

const BaseWrapper = styled.div<{ disable?: boolean }>`
  border: 1px solid #400c8b;
  border-radius: 10px;
  display: flex;
  padding: 6px;
  align-items: center;
  :hover {
    cursor: ${({ disable }) => !disable && "pointer"};
    background-color: rgba(64, 12, 139, 0.7);
  }
  background-color: ${({ theme, disable }) => disable && "#400C8B"};
  opacity: ${({ disable }) => disable && "0.4"};
`;

const RowWrapper = styled.div`
  white-space: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export default function CommonBases({
  chainId,
  onSelect,
  selectedCurrency,
  commonBasesType,
}: {
  chainId?: ChainId;
  commonBasesType;
  selectedCurrency?: Currency | null;
  onSelect: (currency: Currency) => void;
}) {
  const native = useNativeCurrency();
  const { t } = useTranslation();
  const pinTokenDescText =
    commonBasesType === CommonBasesType.SWAP_LIMITORDER
      ? t("Common tokens")
      : t("Common bases");

  return (
    <AutoColumn gap="md">
      <AutoRow>
        <Text fontSize="14px" color="#400C8B" style={{ color: "#400C8B" }}>
          {pinTokenDescText}
        </Text>
        {commonBasesType === CommonBasesType.LIQUIDITY && (
          <QuestionHelper
            text={t("These tokens are commonly paired with other tokens.")}
            ml="4px"
          />
        )}
      </AutoRow>
      <RowWrapper>
        <ButtonWrapper>
          <BaseWrapper
            onClick={() => {
              if (!selectedCurrency || !selectedCurrency.isNative) {
                onSelect(native);
              }
            }}
            disable={selectedCurrency?.isNative}
          >
            <CurrencyLogo currency={native} style={{ marginRight: 8 }} />
            <Text
              color="#400C8B"
              style={{
                color: selectedCurrency?.isNative ? "white" : "#400C8B",
              }}
            >
              {native?.symbol}
            </Text>
          </BaseWrapper>
        </ButtonWrapper>
        {(chainId ? SUGGESTED_BASES[chainId] || [] : []).map((token: Token) => {
          const selected = selectedCurrency?.equals(token);
          return (
            <ButtonWrapper key={`buttonBase#${token.address}`}>
              <BaseWrapper
                onClick={() => !selected && onSelect(token)}
                disable={selected}
              >
                <CurrencyLogo
                  currency={token}
                  style={{ marginRight: 8, borderRadius: "50%" }}
                />
                <Text
                  color="#400C8B"
                  style={{ color: selected ? "white" : "#400C8B" }}
                >
                  {token.symbol}
                </Text>
              </BaseWrapper>
            </ButtonWrapper>
          );
        })}
      </RowWrapper>
    </AutoColumn>
  );
}
