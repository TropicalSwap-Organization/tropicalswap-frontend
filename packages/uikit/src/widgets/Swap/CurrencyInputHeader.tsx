import { AtomBox } from "@pancakeswap/ui";
import { ReactNode } from "react";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";

interface Props {
  title: ReactNode;
  subtitle: ReactNode;
  className?: string;
}

export const CurrencyInputHeader = ({ title, subtitle, className }: Props) => {
  return (
    <AtomBox
      width="full"
      alignItems="center"
      flexDirection="column"
      padding="24px"
      borderBottom="1"
      className={className}
    >
      <AtomBox display="flex" width="full" alignItems="center" justifyContent="space-between">
        {title}
      </AtomBox>
      {subtitle}
    </AtomBox>
  );
};

export const CurrencyInputHeaderTitle = ({ children }: { children: ReactNode; className?: string }) => (
  <Heading as="h2" style={{ color: "#C54177" }}>
    {children}
  </Heading>
);
export const CurrencyInputHeaderSubTitle = ({ children }: { children: ReactNode }) => (
  <Text color="#400C8B" fontSize="14px" textAlign="center" style={{ color: "#400C8B" }}>
    {children}
  </Text>
);
