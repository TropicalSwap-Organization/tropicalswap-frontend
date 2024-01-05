import NextLink from "next/link";
import { Box, Breadcrumbs, Text, Link } from "@pancakeswap/uikit";
import { useTranslation } from "@pancakeswap/localization";

const Crumbs = () => {
  const { t } = useTranslation();

  return (
    <Box mb="24px">
      <Breadcrumbs>
        <NextLink href="/" passHref>
          <Link>{t("Home")}</Link>
        </NextLink>
        <NextLink href="/prediction" passHref>
          <Link>{t("Prediction")}</Link>
        </NextLink>
        <Text>{t("Leaderboard")}</Text>
      </Breadcrumbs>
    </Box>
  );
};

export default Crumbs;
