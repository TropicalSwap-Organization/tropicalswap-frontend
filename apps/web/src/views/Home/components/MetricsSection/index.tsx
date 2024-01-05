import {
  Heading,
  Flex,
  Text,
  Skeleton,
  ChartIcon,
  CommunityIcon,
  SwapIcon,
} from "@pancakeswap/uikit";
import { useTranslation } from "@pancakeswap/localization";
import useTheme from "hooks/useTheme";
import { formatLocalisedCompactNumber } from "@pancakeswap/utils/formatBalance";
import useSWRImmutable from "swr/immutable";
import IconCard, { IconCardData } from "../IconCard";
import StatCardContent from "./StatCardContent";
import GradientLogo from "../GradientLogoSvg";

const Stats = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const { data: tvl } = useSWRImmutable("tvl");
  const { data: txCount } = useSWRImmutable("totalTx30Days");
  const { data: addressCount } = useSWRImmutable("addressCount30Days");
  const trades = formatLocalisedCompactNumber(0);
  /*   const trades = formatLocalisedCompactNumber(txCount); */
  /*   const users = formatLocalisedCompactNumber(addressCount); */
  const users = formatLocalisedCompactNumber(0);
  const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : "-";

  const tvlText = t(
    "And those users are now entrusting the platform with over $%tvl% in funds.",
    { tvl: tvlString }
  );
  const [entrusting, inFunds] = tvlText.split(tvlString);

  const UsersCardData: IconCardData = {
    /*icon: <CommunityIcon color="secondary" width="36px" />,*/
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2973_450)">
          <path
            d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.625 8.25V4.875C8.625 3.97989 8.98058 3.12145 9.61351 2.48851C10.2465 1.85558 11.1049 1.5 12 1.5C12.8951 1.5 13.7535 1.85558 14.3865 2.48851C15.0194 3.12145 15.375 3.97989 15.375 4.875V8.25"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2973_450">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  };

  const TradesCardData: IconCardData = {
    /*  icon: <SwapIcon color="primary" width="36px" />,*/
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2973_16133)">
          <path
            d="M9 11.25C13.1421 11.25 16.5 9.73896 16.5 7.875C16.5 6.01104 13.1421 4.5 9 4.5C4.85786 4.5 1.5 6.01104 1.5 7.875C1.5 9.73896 4.85786 11.25 9 11.25Z"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.5 7.875V11.625C1.5 13.4906 4.85625 15 9 15C13.1438 15 16.5 13.4906 16.5 11.625V7.875"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 10.9688V14.7188"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 9.06641C19.9219 9.38516 22.5 10.7445 22.5 12.3758C22.5 14.2414 19.1438 15.7508 15 15.7508C13.1625 15.7508 11.475 15.4508 10.1719 14.9633"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 14.9344V16.125C7.5 17.9906 10.8562 19.5 15 19.5C19.1438 19.5 22.5 17.9906 22.5 16.125V12.375"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 15.4688V19.2188"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.9688V19.2188"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2973_16133">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  };

  const StakedCardData: IconCardData = {
    /*    icon: <ChartIcon color="failure" width="36px" />,*/
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2973_24245)">
          <path
            d="M12 12V3"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.7922 7.5L4.21094 16.5"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.15009 13.65C3.04777 13.106 2.99755 12.5535 3.00009 12C2.99891 10.1387 3.57545 8.32287 4.65016 6.80317C5.72487 5.28346 7.24477 4.13477 9.00009 3.51562V10.2656L3.15009 13.65Z"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0008 3C13.5778 3.00018 15.1271 3.41474 16.4935 4.20215C17.8599 4.98957 18.9954 6.12219 19.7862 7.48658C20.5771 8.85096 20.9956 10.3992 20.9997 11.9762C21.0039 13.5533 20.5936 15.1037 19.81 16.4722C19.0263 17.8408 17.8968 18.9794 16.5346 19.774C15.1724 20.5686 13.6253 20.9914 12.0483 20.9999C10.4713 21.0084 8.91976 20.6024 7.54906 19.8225C6.17837 19.0426 5.03665 17.9163 4.23828 16.5563"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2973_24245">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  };

  const VolumeTradeData: IconCardData = {
    /*    icon: <ChartIcon color="failure" width="36px" />,*/
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2973_43889)">
          <path
            d="M12 10.125V20.25"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 3.75V6.375"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.125C13.0355 10.125 13.875 9.28553 13.875 8.25C13.875 7.21447 13.0355 6.375 12 6.375C10.9645 6.375 10.125 7.21447 10.125 8.25C10.125 9.28553 10.9645 10.125 12 10.125Z"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.75 17.625V20.25"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.75 3.75V13.875"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.75 17.625C19.7855 17.625 20.625 16.7855 20.625 15.75C20.625 14.7145 19.7855 13.875 18.75 13.875C17.7145 13.875 16.875 14.7145 16.875 15.75C16.875 16.7855 17.7145 17.625 18.75 17.625Z"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.25 14.625V20.25"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.25 3.75V10.875"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.25 14.625C6.28553 14.625 7.125 13.7855 7.125 12.75C7.125 11.7145 6.28553 10.875 5.25 10.875C4.21447 10.875 3.375 11.7145 3.375 12.75C3.375 13.7855 4.21447 14.625 5.25 14.625Z"
            stroke="#400C8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2973_43889">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      style={{ textAlign: "center" }}
    >
      {/* <GradientLogo height="48px" width="48px" mb="24px" /> */}
      {/*      <Heading textAlign="center" scale="xl" color="red">
        {t("Visually enchanting")}
      </Heading>*/}
      <div className="text-white font-mitr font-bold lg:text-[65px] lg:leading-[55px] text-[25px]">
        Visually enchanting
      </div>
      <div className="text-[#FFBF00] font-mitr mb-8 font-bold lg:text-[65px] lg:leading-[55px] text-[25px]">
        Unmatched simplicity
      </div>
      {/*      <Heading textAlign="center" scale="xl" mb="32px" color="#FFBF00">
        {t("Unmatched simplicity")}
      </Heading>*/}
      <div className="lg:block hidden mb-14">
        <div className="text-white font-mitr lg:text-[16px] lg:leading-[22px] text-[20px] leading-[30px]">
          Immerse yourself in a vibrant oasis of trading, staking
        </div>
        <div className="text-white font-mitr lg:text-[16px] lg:leading-[22px] text-[20px] leading-[30px]">
          and earning in our new exotic paradise on Mantle.
        </div>
      </div>
      <div className="lg:hidden block mb-14">
        <div className="text-white font-mitr mb-8  lg:text-[16px] lg:leading-[22px] text-[20px] leading-[30px]">
          Immerse yourself in a vibrant oasis of trading, staking and earning in
          our new exotic paradise on Mantle.
        </div>
      </div>
      {/*      <Text textAlign="center" color="white">
        {t("Immerse yourself in a vibrant oasis of trading, staking")}
      </Text>*/}
      {/*<Flex flexWrap="wrap">*/}
      {/*      <Text textAlign="center" color="white" mb="32px">
          {t("and earning in our new exotic paradise on Arbitrum.")}
        </Text>*/}
      {/* <Text display="inline" textAlign="center" color="textSubtle" mb="20px">
          {entrusting}
          <>{tvl ? <>{tvlString}</> : <Skeleton display="inline-block" height={16} width={70} mt="2px" />}</>
          {inFunds}
        </Text> */}
      {/*</Flex>*/}
      {/*
      <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t('Will you join them?')}
      </Text> */}

      <Flex maxWidth="100%" flexDirection={["column", null, null, "row"]}>
        <IconCard
          {...UsersCardData}
          mr={[null, null, null, "16px"]}
          mb={["16px", null, null, "0"]}
        >
          <StatCardContent
            /*  headingText={t("$%users% users", { users })} */
            headingText={t("%users% users", { users: "N/A" })}
            bodyText={t("Total Value Locked")}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard
          {...TradesCardData}
          mr={[null, null, null, "16px"]}
          mb={["16px", null, null, "0"]}
        >
          <StatCardContent
            /*  headingText={t("$%trades% trades", { trades })} */
            headingText={t("%trades% trades", { trades: "N/A" })}
            bodyText={t("Market Cap")}
            highlightColor="red"
          />
        </IconCard>
        <IconCard
          {...StakedCardData}
          mr={[null, null, null, "16px"]}
          mb={["16px", null, null, "0"]}
        >
          <StatCardContent
            /*  headingText={t("$%tvl% staked", { tvl: 0 })} */
            headingText={t("%tvl% staked", { tvl: "N/A" })}
            /*  headingText={t("$%tvl% staked", { tvl: tvlString })} */
            bodyText={t("Circulating Supply")}
            highlightColor={theme.colors.failure}
          />
        </IconCard>
        <IconCard {...VolumeTradeData}>
          <StatCardContent
            headingText={t("%tvl% staked", { tvl: "N/A" })}
            /*    headingText={t("$%tvl% staked", { tvl: tvlString })} */
            bodyText={t("Total Volume Traded")}
            highlightColor={theme.colors.failure}
          />
        </IconCard>
      </Flex>
    </Flex>
  );
};

export default Stats;
