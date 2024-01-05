import React from "react";
import { Flex, Link, Text, TimerIcon, Balance } from "@pancakeswap/uikit";
import { getBlockExploreLink } from "utils";
import BigNumber from "bignumber.js";
import { useTranslation } from "@pancakeswap/localization";
import { getFullDisplayBalance } from "@pancakeswap/utils/formatBalance";
import { Token } from "@pancakeswap/sdk";

interface MaxStakeRowProps {
  small?: boolean;
  stakingLimit: BigNumber;
  currentBlock: number;
  stakingLimitEndBlock: number;
  stakingToken: Token;
  hasPoolStarted: boolean;
  endBlock: number;
}

const MaxStakeRow: React.FC<React.PropsWithChildren<MaxStakeRowProps>> = ({
  small = false,
  stakingLimit,
  currentBlock,
  stakingLimitEndBlock,
  stakingToken,
  hasPoolStarted,
  endBlock,
}) => {
  const { t } = useTranslation();

  return (
    <Flex flexDirection="column">
      <Flex justifyContent="space-between" alignItems="center">
        <Text small={small} style={{ color: "#400C8B" }}>
          {t("Max. stake per user")}:
        </Text>
        <Text
          small={small}
          style={{ color: "#400C8B" }}
        >{`${getFullDisplayBalance(stakingLimit, stakingToken.decimals, 0)} ${
          stakingToken.symbol
        }`}</Text>
      </Flex>
      {hasPoolStarted && endBlock !== stakingLimitEndBlock && (
        <Flex justifyContent="space-between" alignItems="center">
          <Text small={small} style={{ color: "#400C8B" }}>
            {t("Max. stake limit ends in")}:
          </Text>
          <Link
            external
            href={getBlockExploreLink(stakingLimitEndBlock, "countdown")}
            style={{ color: "#400C8B" }}
          >
            <Balance
              small={small}
              value={Math.max(stakingLimitEndBlock - currentBlock, 0)}
              decimals={0}
              color="primary"
            />
            <Text
              small={small}
              ml="4px"
              color="primary"
              textTransform="lowercase"
              style={{ color: "#400C8B" }}
            >
              {t("Blocks")}
            </Text>
            <TimerIcon ml="4px" color="#C54177" />
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default MaxStakeRow;
