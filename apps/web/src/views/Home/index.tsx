import styled from "styled-components";
import {
  ArrowForwardIcon,
  Button,
  Link,
  OpenNewIcon,
  PageSection,
  Text,
  NextLinkFromReactRouter as RouterLink,
} from "@pancakeswap/uikit";
import { useAccount } from "wagmi";
// import useTheme from "hooks/useTheme";
// import Container from "components/Layout/Container";
import { useTranslation } from "@pancakeswap/localization";
// import { useActiveChainId } from "hooks/useActiveChainId";
// import { ChainId } from '@pancakeswap/sdk'
import ConnectWalletButton from "components/ConnectWalletButton";
// import Hero from "./components/Hero";
import {
  swapSectionData,
  earnSectionData,
  cakeSectionData,
} from "./components/SalesSection/data";
import MetricsSection from "./components/MetricsSection";
// import SalesSection from './components/SalesSection'
// import WinSection from './components/WinSection'
// import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from "./components/Footer";
import CakeDataRow from "./components/CakeDataRow";
import MultipleBanner from "./components/Banners/MultipleBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
// import UserBanner from './components/UserBanner'
// import MultipleBanner from './components/Banners/MultipleBanner'

// const StyledHeroSection = styled(PageSection)`
//   padding-top: 16px;

//   ${({ theme }) => theme.mediaQueries.md} {
//     padding-top: 48px;
//   }
// `

const StyledHeroSection = styled(PageSection)``;

const StyledSwiper = styled(Swiper)`
  .swiper {
  }

  .swiper-slide {
  }

  .swiper-slide img {
  }
`;

// const UserBannerWrapper = styled(Container)`
//   z-index: 1;
//   position: absolute;
//   width: 100%;
//   top: 0;
//   left: 50%;
//   transform: translate(-50%, 0);
//   padding-left: 0px;
//   padding-right: 0px;

//   ${({ theme }) => theme.mediaQueries.lg} {
//     padding-left: 24px;
//     padding-right: 24px;
//   }
// `;

const Home: React.FC<React.PropsWithChildren> = () => {
  // const { theme } = useTheme();
  const { address: account } = useAccount();
  // const { chainId } = useActiveChainId();

  // const HomeSectionContainerStyles = {
  //   margin: "0",
  //   width: "100%",
  //   maxWidth: "968px",
  // };

  const { t } = useTranslation();

  return (
    <>
      <style jsx global>
        {`
          #home-1 .page-bg {
            background: linear-gradient(139.73deg, #e6fdff 0%, #f3efff 100%);
          }
          [data-theme="dark"] #home-1 .page-bg {
            background: radial-gradient(
              103.12% 50% at 50% 50%,
              #21193a 0%,
              #191326 100%
            );
          }
          #home-2 .page-bg {
            background: linear-gradient(180deg, #ffffff 22%, #d7caec 100%);
          }
          [data-theme="dark"] #home-2 .page-bg {
            background: linear-gradient(180deg, #09070c 22%, #201335 100%);
          }
          #home-3 .page-bg {
            background: linear-gradient(180deg, #6fb6f1 0%, #eaf2f6 100%);
          }
          [data-theme="dark"] #home-3 .page-bg {
            background: linear-gradient(180deg, #0b4576 0%, #091115 100%);
          }
          #home-4 .inner-wedge svg {
            fill: #d8cbed;
          }
          [data-theme="dark"] #home-4 .inner-wedge svg {
            fill: #201335;
          }
        `}
      </style>
      <div className="overflow-hidden">
        <StyledSwiper
          speed={500}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <StyledHeroSection
              innerProps={{ style: { margin: "0", width: "100%" } }}
              containerProps={{
                id: "home-1",
              }}
              index={2}
              hasCurvedDivider={false}
              className="px-4 pb-[6rem] lg:pb-0 flex justify-center items-center"
              style={{ background: "#400C8B" }}
            >
              <div className="w-full max-w-[60rem] lg:h-[10rem] h-auto rounded-3xl bg-[#5D5FEF] lg:px-12 px-4 py-2 relative z-20">
                <div className="h-full justify-center flex flex-col">
                  <div className="text-[#FDE736] mb-2 text-[18px] leading-[25px] font-mitr font-bold">
                    Launchpad
                  </div>
                  <div className="mb-2 lg:text-[30px] lg:leading-[35px] text-[16px] leading-[22px] font-mitr text-white">
                    $PAPPLE IDO SOON!
                  </div>
                  <Button
                    style={{ background: "#FFBF00", boxShadow: "none" }}
                    className="w-fit"
                    /* onClick={() => (window.location.href = "/launchpad")} */
                    onClick={() =>
                      window.open(
                        "https://docs.tropicalswap.exchange/features/launchpad/usdpapple-presale",
                        "_blank"
                      )
                    }
                  >
                    <Text
                      color="#162578"
                      className="mr-2 text-[#400C8B] font-mitr"
                      bold
                      fontSize="16px"
                    >
                      Buy in presale
                    </Text>
                    <ArrowForwardIcon color="#162578" />
                  </Button>
                </div>
                <img
                  src="/images/home/home-banner.png"
                  className="h-full absolute top-0 md:right-8 -right-48 z-10"
                  alt=""
                />
                <img
                  src="/images/home/home-banner-logo.png"
                  className="lg:block hidden h-[15rem] absolute -top-12 right-12 z-20"
                  alt=""
                />
                <img
                  src="/images/home/home-banner-logo.png"
                  className="lg:hidden block h-[7rem] rotate-[30deg] absolute -bottom-6 right-4 z-20"
                  alt=""
                />
              </div>
            </StyledHeroSection>
          </SwiperSlide>
          <SwiperSlide>
            <StyledHeroSection
              innerProps={{ style: { margin: "0", width: "100%" } }}
              containerProps={{
                id: "home-1",
              }}
              index={2}
              hasCurvedDivider={false}
              className="px-4 pb-[6rem] lg:pb-0 flex justify-center items-center"
              style={{ background: "#400C8B" }}
            >
              <div className="w-full max-w-[60rem] lg:h-[10rem] h-auto rounded-3xl bg-[#C54177] lg:px-12 px-4 py-2 relative z-20">
                <div className="h-full justify-center flex flex-col">
                  <div className="text-[#FDE736] mb-2 text-[18px] leading-[25px] font-mitr font-bold">
                    $ Airdrop Competition $
                  </div>
                  <div className="mb-2 lg:text-[30px] lg:leading-[35px] text-[16px] leading-[22px] font-mitr text-white">
                    10,000 $PAPPLE + $MNT rewards
                  </div>
                  <Button
                    style={{ background: "#FFBF00", boxShadow: "none" }}
                    className="w-fit"
                    /* onClick={() => (window.location.href = "/launchpad")} */
                    /*          onClick={() =>
                      window.open(
                        "https://docs.tropicalswap.exchange/features/launchpad/usdpapple-presale",
                        "_blank"
                      )
                    } */
                  >
                    <Text
                      color="#162578"
                      className="mr-2 text-[#400C8B] font-mitr"
                      bold
                      fontSize="16px"
                    >
                      Learn How
                    </Text>
                    <ArrowForwardIcon color="#162578" />
                  </Button>
                </div>
                <img
                  src="/images/home/home-banner.png"
                  className="h-full absolute top-0 md:right-8 -right-48 z-10"
                  alt=""
                />
                <img
                  src="/images/launchpad-header1.png"
                  className="lg:block hidden h-[15rem] absolute -top-12 right-20 z-20"
                  alt=""
                />
                <img
                  src="/images/launchpad-header1.png"
                  className="lg:hidden block h-[7rem] absolute -bottom-6 right-4 z-20"
                  alt=""
                />
              </div>
            </StyledHeroSection>
          </SwiperSlide>
        </StyledSwiper>
        {/* {account && chainId === ChainId.BSC && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )} */}
        {/*   <MultipleBanner /> */}
        {/* <Hero /> */}

        <div style={{ background: "#400C8B" }}>
          <div
            className="lg:w-[95%] w-full lg:rounded-tr-[85px] lg:rounded-br-[85px]  flex flex-col justify-center xl:py-28 xl:px-56 lg:px-36  py-32 px-8 relative z-30"
            style={{ background: "#76BFE4" }}
          >
            <div className="lg:block hidden">
              <div className="lg:flex block items-center lg:space-x-2 space-x-0">
                <span className="text-[#162578] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                  Dive into a
                </span>
                <span className="w-fit py-2 px-6 rounded-full bg-[#162578] flex items-center justify-center">
                  <span className="text-[#FFBF00] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                    refreshing
                  </span>
                </span>
              </div>
              <div className="text-[#162578]  lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold mb-6">
                sea of opportunities.
              </div>
            </div>
            <div className="lg:hidden block mb-8">
              {/*<div className="lg:flex block items-center lg:space-x-2 space-x-0">*/}
              <span className="text-[#162578] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                Dive into a
              </span>
              &nbsp;&nbsp;
              <span className="w-fit py-2 px-6 rounded-full bg-[#162578] inline-flex items-center justify-center">
                <span className="text-[#FFBF00] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                  refreshing
                </span>
              </span>
              {/*</div>*/}
              &nbsp;&nbsp;
              <span className="text-[#162578]  lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold mb-6">
                sea of opportunities.
              </span>
            </div>
            <div className="text-[#162578] font-mitr text-[20px] leading-[25px] mb-6">
              Trade, stake, and earn crypto in our decentralized ecosystem.
            </div>
            <div className="flex lg:block flex-col items-center">
              <div className="flex">
                {!account && (
                  <ConnectWalletButton
                    mb="16px"
                    style={{
                      background: "#FFBF00",
                      color: "#400C8B",
                      boxShadow: "none",
                    }}
                  />
                )}
                <Button
                  style={{
                    background: "#76BFE4",
                    color: "#162578",
                    border: "2px solid #162578",
                    boxShadow: "none",
                  }}
                  className="w-fit ml-4"
                  onClick={() => (window.location.href = "/swap")}
                >
                  <Text
                    color="#162578"
                    bold
                    className="mr-2 text-[#162578] font-mitr"
                    fontSize="16px"
                    mr="4px"
                  >
                    Trade Now
                  </Text>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3022_18409)">
                      <path
                        d="M13.75 11.875L17.5 8.125L13.75 4.375"
                        stroke="#162578"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 16.875H3.125C2.95924 16.875 2.80027 16.8092 2.68306 16.6919C2.56585 16.5747 2.5 16.4158 2.5 16.25V6.875"
                        stroke="#162578"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.85938 13.75C6.27643 12.1401 7.21619 10.7143 8.53119 9.69621C9.84618 8.67815 11.462 8.1255 13.125 8.125H17.5"
                        stroke="#162578"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3022_18409">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  {/*        <ArrowForwardIcon color="#400C8B" />*/}
                </Button>
              </div>
              <img
                src="/images/home/home-logo2.png"
                alt=""
                /*  className="hidden lg:block w-[22rem] bottom-8 h-[17rem] absolute right-8"*/
                className="hidden lg:block xl:w-[27rem] bottom-8 xl:h-[22rem] h-[17rem] w-[22rem] md: absolute right-8"
              />
              <img
                src="/images/home/home-logo2.png"
                alt=""
                className="block lg:hidden w-[18rem] -top-[7rem] h-[13rem] absolute left-1"
              />
            </div>
          </div>
        </div>
        {/* //   padding-top: 16px;
//   padding-bottom: 16px;

//   ${({ theme }) => theme.mediaQueries.sm} { */}
        {/* //     padding-top: 32px;
//     padding-bottom: 32px;
//   }

//   ${({ theme }) => theme.mediaQueries.lg} { */}
        {/* //     padding-top: 48px;
//     padding-bottom: 48px;
//   } */}
        <PageSection
          innerProps={{ style: { margin: "0", width: "100%" } }}
          containerProps={{
            id: "home-2",
          }}
          index={2}
          hasCurvedDivider={false}
          style={{ background: "#400C8B" }}
          className="pt-[16px] pb-[16px]"
        >
          <MetricsSection />
        </PageSection>
        <div
          style={{ background: "#400C8B" }}
          className="flex lg:justify-end justify-start "
        >
          <div
            className="lg:w-[95%] w-full lg:rounded-tl-[85px] lg:rounded-bl-[85px]  flex flex-col justify-center pt-8 lg:pb-8 pb-52 lg:px-56 px-8 relative lg:items-end items-start z-30"
            style={{ background: "#A5A6F6" }}
          >
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[#400C8B] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px]  font-mitr font-bold">
                  Trading made
                </span>
              </div>
              <div className="text-[#400C8B] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px]  font-mitr font-bold mb-2">
                smart and
              </div>
              <div>
                <span className="w-fit py-1 px-6 rounded-full bg-[#400C8B] flex items-center justify-center mb-2">
                  <span className="text-[#FFBF00] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px]  font-mitr font-bold">
                    simple
                  </span>
                </span>
              </div>
              <div className="text-[#162578] font-mitr text-[16px] leading-[22px]">
                No registration, No KYC.
              </div>
              <div className="text-[#162578] font-mitr text-[16px] leading-[22px] mb-6">
                DeFi at its finest.
              </div>
              <div className="flex">
                <Button
                  mr="16px"
                  style={{ background: "#FFBF00", boxShadow: "none" }}
                >
                  {swapSectionData(t).primaryButton.external ? (
                    <Link external href={swapSectionData(t).primaryButton.to}>
                      <Text color="#400C8B" bold fontSize="16px">
                        {swapSectionData(t).primaryButton.text}
                      </Text>
                    </Link>
                  ) : (
                    <RouterLink to={swapSectionData(t).primaryButton.to}>
                      <Text color="#400C8B" bold fontSize="16px">
                        {swapSectionData(t).primaryButton.text}
                      </Text>
                    </RouterLink>
                  )}
                </Button>
                {swapSectionData(t).secondaryButton.external ? (
                  <Link
                    style={{
                      color: "#400C8B",
                      border: "2px solid #400C8B",
                      padding: "0 24px",
                      borderRadius: "16px",
                    }}
                    external
                    href={swapSectionData(t).secondaryButton.to}
                  >
                    {swapSectionData(t).secondaryButton.text}
                    <OpenNewIcon color="#400C8B" ml="4px" />
                  </Link>
                ) : (
                  <RouterLink to={swapSectionData(t).secondaryButton.to}>
                    {swapSectionData(t).secondaryButton.text}
                  </RouterLink>
                )}
              </div>
              <div>
                <img
                  src="/images/home/home-logo3.png"
                  alt=""
                  className="hidden lg:block w-[20rem] top-0 h-[20rem] absolute left-[5%]"
                />
                <img
                  src="/images/home/home-logo3.png"
                  alt=""
                  className="block lg:hidden w-[16rem] h-[16rem] absolute -right-[3rem] -bottom-14"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ background: "#400C8B" }}
          className="flex lg:px-[15rem] lg:py-[20rem] py-48 px-8 flex-col relative items-center text-center overflow-hidden"
        >
          <div className="z-20">
            <div className="mb-4">
              <span className="text-[#FFBF00] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold mb-8">
                Earning
              </span>
              &nbsp; &nbsp;
              <span className="text-white lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold mb-4">
                Crypto
              </span>
            </div>
            <div className="text-white lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold mb-4">
              made easy
            </div>
            <div className="text-white font-mitr text-[16px] leading-[22px] mb-12">
              Taste the juicy rewards of our exotic paradise.
            </div>
            <div className="flex justify-center">
              <Button
                mr="16px"
                style={{ background: "#FFBF00", boxShadow: "none" }}
                className="hover:cursor-not-allowed opacity-50"
              >
                {earnSectionData(t).primaryButton.external ? (
                  /* <Link external href={earnSectionData(t).primaryButton.to}> */
                  <Link>
                    <Text
                      color="#400C8B"
                      bold
                      fontSize="16px"
                      style={{ color: "#400C8B" }}
                    >
                      {earnSectionData(t).primaryButton.text}
                    </Text>
                  </Link>
                ) : (
                  /*  <RouterLink to={earnSectionData(t).primaryButton.to}> */
                  <Text
                    color="#400C8B"
                    bold
                    fontSize="16px"
                    style={{ color: "#400C8B" }}
                  >
                    {earnSectionData(t).primaryButton.text}
                  </Text>
                  /*  </RouterLink> */
                )}
              </Button>
              {earnSectionData(t).secondaryButton.external ? (
                <Link
                  style={{
                    color: "#FFBF00",
                    border: "2px solid #FFBF00",
                    padding: "0 24px",
                    borderRadius: "16px",
                  }}
                  external
                  href={earnSectionData(t).secondaryButton.to}
                >
                  {earnSectionData(t).secondaryButton.text}
                  <OpenNewIcon color="#FFBF00" ml="4px" />
                </Link>
              ) : (
                <RouterLink to={earnSectionData(t).secondaryButton.to}>
                  {earnSectionData(t).secondaryButton.text}
                </RouterLink>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/home/home-logo4.png"
              alt=""
              className="w-3/6 h-auto hidden lg:block absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/home/home-logo4.png"
              alt=""
              className="w-full h-auto scale-150 rotate-[28deg] lg:hidden block absolute  z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"
            />
          </div>
        </div>

        {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        containerProps={{
          id: 'home-4',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData(t)} />
      </PageSection> */}
        {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.gradientCardHeader}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...earnSectionData(t)} />
        
        {chainId === ChainId.BSC && <FarmsPoolsRow />}
      </PageSection> */}
        {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        // containerProps={{
        //   id: 'home-3',
        // }}
        index={2}
        hasCurvedDivider={false}
        style={{ background: '#400C8B' }}
      > */}
        {/* test */}
        {/* <WinSection /> */}
        {/* </PageSection> */}
        {/* <PageSection
        // innerProps={{ style: HomeSectionContainerStyles }}
        background="#400C8B"
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData(t)} />
        {/* <CakeDataRow /> */}
        {/* </PageSection> */}
        <div
          style={{ background: "#400C8B" }}
          className="flex justify-start lg:pb-12  pb-28 overflow-hidden"
        >
          <div
            className="lg:w-[85%] w-full lg:rounded-tr-[85px] lg:rounded-br-[85px] flex flex-col justify-center  py-12 lg:px-56 px-8 relative items-start"
            style={{ background: "#FFBF00" }}
          >
            <div className="lg:block hidden">
              <div className="flex items-center space-x-2">
                <span className="text-[#400C8B] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                  Let
                </span>
                <span className="w-fit py-1 px-6 rounded-full bg-[#400C8B] flex items-center justify-center mb-2">
                  <span className="text-[#FFBF00] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                    $PAPPLE
                  </span>
                </span>
                <span className="text-[#400C8B] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                  ignite
                </span>
              </div>
              <div className="text-[#400C8B] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold mb-2">
                your crypto journey with
              </div>
              <div className="text-[#400C8B] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold mb-2">
                {" "}
                exotic energy.
              </div>
            </div>
            <div className="lg:hidden block mb-8">
              {/*  <div className="flex items-center space-x-2">*/}
              <span className="text-[#400C8B] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                Let
              </span>
              &nbsp; &nbsp;
              <span className="w-fit h-fit py-2 px-6 rounded-full bg-[#400C8B] inline-flex items-center justify-center mb-2">
                <span className="text-[#FFBF00] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold">
                  $PAPPLE
                </span>
              </span>
              &nbsp; &nbsp;
              <span className="text-[#400C8B] lg:text-[50px] lg:leading-[55px] text-[30px] leading-[35px] font-mitr font-bold mb-2">
                ignite your crypto journey with exotic energy.
              </span>
            </div>
            <div className="hidden lg:block">
              <div className="text-[#162578] font-mitr text-[16px] leading-[22px] ">
                Unlock the essence of $PAPPLE: the vibrant native token fueling
                the
              </div>
              <div className="text-[#162578] font-mitr text-[16px] leading-[22px]">
                TropicalSwap ecosystem.
              </div>
              <div className="text-[#162578] font-mitr text-[16px] leading-[22px] mb-6">
                Buy it, win it, farm it, spend it, stake it... the possibilities
                are endless!
              </div>
            </div>
            <div className="block lg:hidden">
              <div className="text-[#162578] font-mitr text-[16px] leading-[22px] mb-6">
                Unlock the essence of $PAPPLE: the vibrant native token fueling
                the TropicalSwap ecosystem. Buy it, win it, farm it, spend it,
                stake it... the possibilities are endless!
              </div>
            </div>
            <div className="flex">
              <Button
                mr="16px"
                style={{ background: "#400C8B", color: "#FFBF00" }}
                className="hover:cursor-not-allowed opacity-50"
              >
                {cakeSectionData().primaryButton.external ? (
                  /*                   <Link
                    external
                    href={cakeSectionData().primaryButton.to}
                    className="hover:cursor-not-allowed opacity-50"
                  > */
                  <Text color="#FFBF00" bold fontSize="16px">
                    {cakeSectionData().primaryButton.text}
                  </Text>
                ) : (
                  /*   </Link> */
                  /*            <RouterLink
                    to={cakeSectionData().primaryButton.to}
                    className="hover:cursor-not-allowed opacity-50"
                  > */
                  <Text color="#FFBF00" bold fontSize="16px">
                    {cakeSectionData().primaryButton.text}
                  </Text>
                  /*    </RouterLink> */
                )}
              </Button>
              {cakeSectionData().secondaryButton.external ? (
                <Link
                  style={{
                    color: "#400C8B",
                    border: "2px solid #400C8B",
                    padding: "0 24px",
                    borderRadius: "16px",
                  }}
                  external
                  href={cakeSectionData().secondaryButton.to}
                >
                  {cakeSectionData().secondaryButton.text}
                  <OpenNewIcon color="#400C8B" ml="4px" />
                </Link>
              ) : (
                <RouterLink to={cakeSectionData().secondaryButton.to}>
                  {cakeSectionData().secondaryButton.text}
                </RouterLink>
              )}
            </div>
            <img
              src="/images/home/home-logo10.png"
              alt=""
              className="w-[23rem] top-[10rem] h-[18rem] absolute -right-[12%] hidden lg:flex"
            />
            <img
              src="/images/home/home-logo10.png"
              alt=""
              className="w-[20rem] h-[15rem] absolute -right-[8rem] -bottom-[3rem] flex lg:hidden"
            />
            <CakeDataRow />
          </div>
        </div>
        <PageSection
          background="#400C8B"
          index={2}
          hasCurvedDivider={false}
          style={{ padding: "0px" }}
          className="w-full"
        >
          <Footer />
        </PageSection>
      </div>
    </>
  );
};

export default Home;
