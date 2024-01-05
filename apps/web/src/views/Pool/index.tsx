import { useMemo } from "react";
import styled from "styled-components";
import {
  Text,
  Flex,
  CardBody,
  CardFooter,
  Button,
  AddIcon,
} from "@pancakeswap/uikit";
import Link from "next/link";
import { useAccount } from "wagmi";
import { useTranslation } from "@pancakeswap/localization";
import { useLPTokensWithBalanceByAccount } from "views/Swap/StableSwap/hooks/useStableConfig";
import FullPositionCard, {
  StableFullPositionCard,
} from "../../components/PositionCard";
import { useTokenBalancesWithLoadingIndicator } from "../../state/wallet/hooks";
import { usePairs, PairState } from "../../hooks/usePairs";
import {
  toV2LiquidityToken,
  useTrackedTokenPairs,
} from "../../state/user/hooks";
import Dots from "../../components/Loader/Dots";
import { AppHeader } from "../../components/App";
import Page from "../Page";
import { BodyWrapperLiquidity } from "components/App/AppBody";

const Body = styled(CardBody)`
  background-color: ${({ theme }) => theme.colors.dropdownDeep};
`;

export default function Pool() {
  const { address: account } = useAccount();
  const { t } = useTranslation();

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs();
  // console.log("trackedTokenPairs length", trackedTokenPairs.length);

  const tokenPairsWithLiquidityTokens = useMemo(
    () =>
      trackedTokenPairs.map((tokens) => ({
        liquidityToken: toV2LiquidityToken(tokens),
        tokens,
      })),
    [trackedTokenPairs]
  );

  const liquidityTokens = useMemo(
    () => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken),
    [tokenPairsWithLiquidityTokens]
  );

  const [v2PairsBalances, fetchingV2PairBalances] =
    useTokenBalancesWithLoadingIndicator(account ?? undefined, liquidityTokens);
  //console.log("v2PairsBalances", v2PairsBalances)

  const stablePairs = useLPTokensWithBalanceByAccount(account);

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan("0")
      ),

    [tokenPairsWithLiquidityTokens, v2PairsBalances]
    // tokenPairsWithLiquidityTokens,
    // [tokenPairsWithLiquidityTokens]
  );

  const v2Pairs = usePairs(
    liquidityTokensWithBalances.map(({ tokens }) => tokens)
  );
  // console.log("v2Pairs", v2Pairs)

  const v2IsLoading =
    fetchingV2PairBalances ||
    v2Pairs?.length < liquidityTokensWithBalances.length ||
    (v2Pairs?.length &&
      v2Pairs.every(([pairState]) => pairState === PairState.LOADING));
  const allV2PairsWithLiquidity = v2Pairs
    ?.filter(
      ([pairState, pair]) => pairState === PairState.EXISTS && Boolean(pair)
    )
    .map(([, pair]) => pair);
  // console.log("allV2PairsWithLiquidity", allV2PairsWithLiquidity)
  const renderBody = () => {
    if (!account) {
      return (
        <Text color="#5C379E" style={{ color: "#5C379E" }} textAlign="center">
          {t("Connect to a wallet to view your liquidity.")}
        </Text>
      );
    }
    if (v2IsLoading) {
      return (
        <Text color="#5C379E" style={{ color: "#5C379E" }} textAlign="center">
          <Dots>{t("Loading")}</Dots>
        </Text>
      );
    }

    let positionCards = [];

    if (allV2PairsWithLiquidity?.length > 0) {
      positionCards = allV2PairsWithLiquidity.map((v2Pair, index) => (
        <FullPositionCard
          key={v2Pair.liquidityToken.address}
          pair={v2Pair}
          mb={
            Boolean(stablePairs?.length) ||
            index < allV2PairsWithLiquidity.length - 1
              ? "16px"
              : 0
          }
        />
      ));
    }

    if (stablePairs && stablePairs.length > 0) {
      positionCards = [
        ...positionCards,
        ...stablePairs.map((stablePair, index) => (
          <StableFullPositionCard
            key={`stable-${stablePair.liquidityToken.address}`}
            pair={stablePair}
            mb={index < stablePairs.length - 1 ? "16px" : 0}
          />
        )),
      ];
    }

    if (positionCards?.length > 0) {
      // console.log("positionCards", positionCards)
      return positionCards;
    }

    return (
      <Text color="#5C379E" style={{ color: "#5C379E" }} textAlign="center">
        {t("No liquidity found!")}
      </Text>
    );
  };

  return (
    <Page>
      <BodyWrapperLiquidity>
        <div className="hidden lg:block">
          <div className="bg-[#A5A6F6] border-none p-[24px]">
            <div className="relative w-full">
              <div className="w-52 h-16 rounded-full bg-[#400C8B] flex items-center justify-center text-[#FFBF00] text-4xl font-bold mb-4">
                Liquidity
              </div>
              <div className="text-[#400C8B]">
                Provide liquidity to earn swap fees!
              </div>
              <img
                className="absolute w-[13rem] h-[10rem]  -bottom-[2.2rem] right-32 z-10"
                src="/images/liquidity-header.png"
                alt="swap-header"
              />
            </div>
          </div>
        </div>
        <AppHeader
          title={t("Your Liquidity")}
          subtitle={t("Provide liquidity to receive LP tokens")}
        />
        <Body style={{ background: "#F7F7F7" }}>
          {renderBody()}
          {account && !v2IsLoading && (
            <Flex flexDirection="column" alignItems="center" mt="24px">
              <Text color="#5C379E" style={{ color: "#5C379E" }} mb="8px">
                {t("Don't see a pair you joined?")}
              </Text>
              <Link href="/find" passHref>
                <Button
                  id="import-pool-link"
                  variant="secondary"
                  color="#5C379E"
                  style={{ border: "2px solid #5C379E", color: "#5C379E" }}
                >
                  {t("Find other LP tokens")}
                </Button>
              </Link>
            </Flex>
          )}
        </Body>
        <CardFooter
          style={{
            textAlign: "center",
            background: "white",
            borderTop: "none",
          }}
        >
          <Link href="/add" passHref>
            <Button
              id="join-pool-button"
              style={{
                boxShadow: "none",
                color: "#5C379E",
                background: "#FFBF00",
              }}
              startIcon={<AddIcon color="#5C379E" />}
            >
              {t("Add Liquidity")}
            </Button>
          </Link>
        </CardFooter>
      </BodyWrapperLiquidity>
    </Page>
  );
}
