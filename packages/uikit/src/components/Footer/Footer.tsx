import { vars } from "@pancakeswap/ui/css/vars.css";
import { useIsMounted } from "@pancakeswap/hooks";
import React from "react";
import { Box, Flex } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledText,
  StyledToolsContainer,
} from "./styles";

import { Button } from "../Button";
import CakePrice from "../CakePrice/CakePrice";
import LangSelector from "../LangSelector/LangSelector";
import { ArrowForwardIcon, LogoWithTextIcon } from "../Svg";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { FooterProps } from "./types";
import { SkeletonV2 } from "../Skeleton";
import { PiCoinsBold } from "react-icons/pi";

const MenuItem: React.FC<React.PropsWithChildren<FooterProps>> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  buyCakeLink,
  ...props
}) => {
  const isMounted = useIsMounted();
  return (
    <StyledFooter
      /*  data-theme="dark"*/
      style={{ background: "#5D5FEF" }}
      p={["40px 16px", null, "56px 40px 32px 40px"]}
      position="relative"
      {...props}
      justifyContent="center"
    >
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        {/*<StyledIconMobileContainer display={["block", null, "none"]}>*/}
        {/*     <LogoWithTextIcon width="130px" />*/}
        <div className="mb-12 lg:hidden block">
          <img src="/full-tropicalswap-icon.png" className="w-52 h-52" alt="Pineapple" />
        </div>
        {/*</StyledIconMobileContainer>*/}
        <Flex justifyContent="space-between" alignItems="flex-start">
          {items?.map((item) => (
            <StyledList style={{ color: "white" }} key={item.label}>
              <StyledListItem style={{ color: "white" }}>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  {href ? (
                    <Link
                      data-theme="dark"
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      color={isHighlighted ? vars.colors.warning : "text"}
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))}
          <Box display={["none", null, "block"]}>
            <div className="mb-12 lg:block hidden">
              <img src="/full-tropicalswap-icon.png" className="w-52 h-52" alt="Pineapple" />
            </div>
          </Box>
        </Flex>
        <div className="lg:block hidden order-3 mt-8">
          <Flex order={[1, null, 3]} justifyContent="space-between" alignItems="center">
            <StyledSocialLinks
              order={[1]}
              style={{ borderBottom: "none", paddingBottom: "0px", marginBottom: "0px" }}
            />
            <Flex order={[2]} mb={["24px", null, "0"]} alignItems="center">
         {/*      <Box mr="20px">
                <CakePrice cakePriceUsd={cakePriceUsd} color="textSubtle" />
              </Box> */}
              <Button
                data-theme={isDark ? "dark" : "light"}
                as="a"
             /*    href={buyCakeLink} */
                target="_blank"
                scale="sm"
               /*  style={{ backgroundColor: "#FFBF00", color: "#400C8B", borderRadius: "16px", height: "48px" }} */
               style={{backgroundColor: "#4F4F4F", color: "#BDBDBD", borderRadius: "16px", height: "48px", boxShadow: "none" }}
                className="hover:cursor-not-allowed opacity-50"
                endIcon={<PiCoinsBold className="ml-2 text-xl" />}
              >
                {buyCakeLabel}
              </Button>
            </Flex>
          </Flex>
        </div>
        {/*MOBILE*/}
        <div className="lg:hidden block">
          <StyledSocialLinks order={[1]} style={{ borderBottom: "none", paddingBottom: "0px", marginBottom: "0px" }} />
          <div className="flex justify-between items-center" style={{ marginTop: "3.5rem" }}>
          {/*   <Box>
              <CakePrice cakePriceUsd={cakePriceUsd} color="textSubtle" />
            </Box> */}
            <Button
              data-theme={isDark ? "dark" : "light"}
              as="a"
              /* href={buyCakeLink} */
              target="_blank"
              scale="sm"
             /*  style={{ backgroundColor: "#FFBF00", color: "#400C8B", borderRadius: "16px", height: "48px" }} */
             style={{backgroundColor: "#4F4F4F", color: "#BDBDBD", borderRadius: "16px", height: "48px", boxShadow: "none" }}
             className="hover:cursor-not-allowed opacity-50"
            endIcon={<PiCoinsBold className="ml-2 text-xl" />}
            >
              {buyCakeLabel}
            </Button>
          </div>
        </div>

        {/*  <StyledToolsContainer
          data-theme="dark"
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >*/}
        {/*<Flex order={[2, null, 1]} alignItems="center">
            <SkeletonV2 variant="round" width="56px" height="32px" isDataReady={isMounted}>
              <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            </SkeletonV2>
            <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              color="textSubtle"
              dropdownPosition="top-right"
            />
          </Flex>*/}
        {/*   <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            <Box mr="20px">
              <CakePrice cakePriceUsd={cakePriceUsd} color="textSubtle" />
            </Box>
            <Button
              data-theme={isDark ? "dark" : "light"}
              as="a"
              href={buyCakeLink}
              target="_blank"
              scale="sm"
              style={{ backgroundColor: "#FFBF00", color: "#400C8B", borderRadius: "16px" }}
              endIcon={<PiCoinsBold className="ml-2 text-xl" />}
            >
              {buyCakeLabel}
            </Button>
          </Flex>
        </StyledToolsContainer>*/}
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
