import styled from "styled-components";
import { Heading, Text, OpenNewIcon, Button } from "@pancakeswap/uikit";
// import { useTranslation } from '@pancakeswap/localization'
import ConnectWalletButton from "components/ConnectWalletButton";
// import Container from "components/Layout/Container";
import { useAccount } from "wagmi";
// import SunburstSvg from "./SunburstSvg";
// import CompositeImage from './CompositeImage'

// const BgWrapper = styled.div`
//   overflow: hidden;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0px;
//   left: 0px;
// `;

// const StyledSunburst = styled(SunburstSvg)`
//   height: 350%;
//   width: 350%;

//   ${({ theme }) => theme.mediaQueries.xl} {
//     height: 400%;
//     width: 400%;
//   }
// `;

// const Wrapper = styled(Flex)`
//   z-index: 1;
//   position: relative;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   background: #da447b;
//   padding: 64px;
// `;

// const FloatingPancakesWrapper = styled(Container)`
//   overflow: hidden;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 50%;
//   transform: translateX(-50%);
//   visibility: hidden;

//   ${({ theme }) => theme.mediaQueries.md} {
//     visibility: visible;
//   }
// `;

// const TopLeftImgWrapper = styled(Flex)`
//   position: absolute;
//   left: 0;
//   top: 0;
// `;

// const BottomRightImgWrapper = styled(Flex)`
//   position: absolute;
//   right: 0;
//   bottom: 0;
// `;

// const topLeftImage = {
//   path: "/images/home/flying-pancakes/",
//   attributes: [
//     { src: "1-bottom", alt: "Pancake flying on the bottom" },
//     { src: "1-left", alt: "Pancake flying on the left" },
//     { src: "1-top", alt: "Pancake flying on the top" },
//   ],
// };

// const bottomRightImage = {
//   path: "/images/home/flying-pancakes/",
//   attributes: [
//     { src: "2-bottom", alt: "Pancake flying on the bottom" },
//     { src: "2-top", alt: "Pancake flying on the top" },
//     { src: "2-right", alt: "Pancake flying on the right" },
//   ],
// };

const Footer = () => {
  // const { t } = useTranslation()
  const { address: account } = useAccount();
  // const { isTablet, isDesktop } = useMatchBreakpoints()

  return (
    <>
      {/* <BgWrapper>
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <StyledSunburst />
        </Flex>
      </BgWrapper> */}
      {/* {(isTablet || isDesktop) && (
        <FloatingPancakesWrapper>
          <TopLeftImgWrapper>
            <CompositeImage {...topLeftImage} maxHeight="256px" />
          </TopLeftImgWrapper>
          <BottomRightImgWrapper>
            <CompositeImage {...bottomRightImage} maxHeight="256px" />
          </BottomRightImgWrapper>
        </FloatingPancakesWrapper>
      )} */}
      {/* <div className="relative">
      <Wrapper className="rounded-tl-3xl rounded-tr-3xl z-10">
        <Heading mb="24px" scale="xl" color="white" className="text-center">
          <div className="text-[50px] leading-[55px] font-mitr font-bold">Discover the</div>
          <div className="text-[50px] leading-[55px] font-mitr font-bold">refreshing breeze</div>
          <div className="text-[50px] leading-[55px] font-mitr font-bold">of finance.</div>
        </Heading>
        <Text textAlign="center" color="white" className="font-mitr text-[16px] leading-[22px]">
          Experience the tropical ease: trade and earn crypto
        </Text>
        <Text mb="24px" color="white" className="font-mitr text-[16px] leading-[22px]">
          with just a few clicks on Arbitrum.
        </Text>
        <div className="flex">
        {!account && <ConnectWalletButton className="mr-4 " style={{ background: "white" ,color: "#da447b" }} />}
        <Button style={{ background: '#da447b', color: '#162578', border: '2px solid white', boxShadow: "none" }} className="w-fit">
          <Text color="white" className="font-mitr text-[16px] leading-[22px] font-bold" mr="4px">
          Learn how to start
          </Text>
          <OpenNewIcon color="white" />
        </Button>
        </div>
      </Wrapper>
      <img src="/images/home/home-logo7.png" className="w-20 h-20 absolute z-20 -top-[2.2rem] -left-[2.2rem]" />
      </div> */}

      {/* DESKTOP */}
      <div className="hidden lg:flex justify-center items-center pt-16">
        <div className="relative">
          <div className="relative inset-0 bg-[#C54177] rounded-tl-3xl rounded-tr-3xl px-8 py-12 flex flex-col justify-center items-center text-white">
            <Heading mb="24px" scale="xl" className="text-center">
              <div className="text-[50px] leading-[55px] font-mitr font-bold">
                Discover the
              </div>
              <div className="text-[50px] leading-[55px] font-mitr font-bold">
                refreshing breeze
              </div>
              <div className="text-[50px] leading-[55px] font-mitr font-bold">
                of finance.
              </div>
            </Heading>
            <Text
              textAlign="center"
              className="font-mitr text-[16px] leading-[22px]"
            >
              Experience the tropical ease: trade and earn crypto
            </Text>
            <Text mb="24px" className="font-mitr text-[16px] leading-[22px]">
              with just a few clicks on Mantle.
            </Text>
            <div className="flex">
              {!account && (
                <ConnectWalletButton
                  className="mr-4 "
                  style={{ background: "white", color: "#da447b" }}
                />
              )}
              <Button
                style={{
                  background: "#C54177",
                  color: "white",
                  border: "2px solid white",
                  boxShadow: "none",
                }}
                className="w-fit"
                onClick={() =>
                  window.open(
                    "https://docs.tropicalswap.exchange/tropicalswap-intro/get-started",
                    "_blank"
                  )
                }
              >
                <Text
                  color="white"
                  className="font-mitr text-[16px] leading-[22px] font-bold"
                  mr="4px"
                >
                  Learn how to start
                </Text>
                <OpenNewIcon color="white" />
              </Button>
            </div>
          </div>
          <img
            src="/images/home/home-logo7.png"
            alt="Votre image"
            className="object-cover w-[6rem] h-[6rem] absolute -top-[3rem] right-[29rem]"
          />
          <img
            src="/images/home/home-logo8.png"
            alt="Votre image"
            className="object-cover w-[15rem] h-[15rem] absolute top-[7rem] right-[31rem] -z-10"
          />
          <img
            src="/images/home/home-logo9.png"
            alt="Votre image"
            className="object-cover w-[15rem] h-[15rem] absolute top-[14rem] left-[32rem] -z-10"
          />
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex lg:hidden">
        <div className="w-full relative bg-[#C54177] px-8 pt-12 pb-32 flex flex-col justify-center items-center text-white">
          <Heading mb="24px" scale="xl" className="text-center">
            <div className="text-[30px] leading-[35px] font-mitr font-bold">
              Discover the
            </div>
            <div className="text-[30px] leading-[35px] font-mitr font-bold">
              refreshing breeze
            </div>
            <div className="text-[30px] leading-[35px] font-mitr font-bold">
              of finance.
            </div>
          </Heading>
          <Text
            textAlign="center"
            className="font-mitr text-[20px] leading-[30px]"
          >
            Experience the tropical ease: trade and earn crypto
          </Text>
          <Text mb="24px" className="font-mitr text-[20px] leading-[30px]">
            with just a few clicks on Mantle.
          </Text>
          <div className="flex flex-col items-center">
            {!account && (
              <ConnectWalletButton
                className="mb-4 w-fit shadow-none"
                style={{ background: "white", color: "#da447b" }}
              />
            )}
            <Button
              style={{
                background: "#da447b",
                color: "#162578",
                border: "2px solid white",
                boxShadow: "none",
              }}
              className="w-fit"
            >
              <Text
                color="white"
                className="font-mitr text-[16px] leading-[22px] font-bold"
                mr="4px"
              >
                Learn how to start
              </Text>
              <OpenNewIcon color="white" />
            </Button>
          </div>
          <img
            src="/images/home/home-logo7.png"
            alt="Votre image"
            className="object-cover w-[5rem] h-[5rem] absolute -top-[2.5rem] left-[5rem]"
          />
          <img
            src="/images/home/home-logo11.png"
            alt="Votre image"
            className="object-cover w-[10rem] h-[10rem] absolute bottom-[2rem] -right-[2rem]"
          />
          <img
            src="/images/home/home-logo9.png"
            alt="Votre image"
            className="object-cover w-[10rem] h-[10rem] absolute bottom-[4rem] -left-[3rem]"
          />
        </div>
        {/* <img
            src="/images/home/home-logo7.png"
            alt="Votre image"
            className="object-cover w-[6rem] h-[6rem] absolute -top-[3rem] right-[29rem]"
          />
          <img
            src="/images/home/home-logo8.png"
            alt="Votre image"
            className="object-cover w-[15rem] h-[15rem] absolute top-[7rem] right-[31rem] -z-10"
          />
          <img
            src="/images/home/home-logo9.png"
            alt="Votre image"
            className="object-cover w-[15rem] h-[15rem] absolute top-[14rem] left-[32rem] -z-10"
          /> */}
      </div>
    </>
  );
};

export default Footer;
