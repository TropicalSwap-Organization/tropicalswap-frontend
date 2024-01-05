import { useTranslation } from "@pancakeswap/localization";
import { useIsMounted } from "@pancakeswap/hooks";
import { PropsWithChildren, ReactNode } from "react";
import { AutoColumn, RowBetween, Text, TextProps, IconButton, PencilIcon } from "../../components";

type SwapInfoType = {
  price: ReactNode;
  allowedSlippage: number;
  onSlippageClick: () => void;
  allowedSlippageSlot?: React.ReactNode;
};

export const SwapInfoLabel = (props: PropsWithChildren<TextProps>) => (
  <Text fontSize="12px" bold style={{ color: "#400C8B" }} {...props} />
);

export const SwapInfo = ({ allowedSlippage, price, onSlippageClick, allowedSlippageSlot }: SwapInfoType) => {
  const { t } = useTranslation();
  const isMounted = useIsMounted();

  return (
    <AutoColumn gap="sm" py="0" px="16px">
      <RowBetween alignItems="center">{price}</RowBetween>
      <RowBetween alignItems="center">
        <SwapInfoLabel >
          {t("Slippage Tolerance")}
          <IconButton scale="sm" variant="text" onClick={onSlippageClick}>
            <PencilIcon color="#C54177" width="10px" style={{ color: "C54177" }} />
          </IconButton>
        </SwapInfoLabel>
        {isMounted &&
          (allowedSlippageSlot ?? (
            <Text bold color="#400C8B" style={{ color: "#400C8B" }}>
              {allowedSlippage / 100}%
            </Text>
          ))}
      </RowBetween>
    </AutoColumn>
  );
};
