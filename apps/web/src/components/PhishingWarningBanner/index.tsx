import { useMemo } from "react";
import styled from "styled-components";
import {
  Text,
  Flex,
  Box,
  CloseIcon,
  IconButton,
  useMatchBreakpoints,
} from "@pancakeswap/uikit";
import { useTranslation } from "@pancakeswap/localization";
import { usePhishingBannerManager } from "state/user/hooks";

const Container = styled(Flex)`
  overflow: hidden;
  height: 100%;
  padding: 12px;
  align-items: center;
  background: #da447b;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 16px;
  }
`;

const InnerContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #da447b;
`;

const SpeechBubble = styled.div`
  background: #400c8b;
  border-radius: 99999px;
  padding: 16px;
  height: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & ${Text} {
    flex-shrink: 0;
    margin-right: 4px;
  }
`;

const domain = "https://tropicalswap.exchange";

const PhishingWarningBanner: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation();
  const [, hideBanner] = usePhishingBannerManager();
  const { isMobile, isMd } = useMatchBreakpoints();
  const warningTextAsParts = useMemo(() => {
    const warningText = t(
      "please make sure you're visiting %domain% - check the URL carefully.",
      { domain }
    );
    return warningText.split(/(https:\/\/tropicalswap.exchange)/g);
  }, [t]);
  const warningTextComponent = (
    <>
      <Text
        as="span"
        color="#FFBF00"
        style={{ color: "#FFBF00" }}
        small
        bold
        textTransform="uppercase"
      >
        {t("Phishing warning: ")}
      </Text>
      {warningTextAsParts.map((text, i) => (
        <Text
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          small
          as="span"
          bold={text === domain}
          // color={text === domain ? '#FFFFFF' : '#BDC2C4'}
          color="#FFFFFF"
          style={{ color: "#FFFFFF" }}
        >
          {text}
        </Text>
      ))}
    </>
  );
  return (
    <Container className="warning-banner">
      {isMobile || isMd ? (
        <>
          <Box>{warningTextComponent}</Box>
          <IconButton onClick={hideBanner} variant="text">
            <CloseIcon color="#FFFFFF" />
          </IconButton>
        </>
      ) : (
        <>
          <InnerContainer>
            {/* <img
              src="/images/decorations/phishing-warning-bunny.webp"
              alt="phishing-warning"
              width="92px"
              onError={(e) => {
                const fallbackSrc = '/images/decorations/phishing-warning-bunny.png'
                if (!e.currentTarget.src.endsWith(fallbackSrc)) {
                  // eslint-disable-next-line no-param-reassign
                  e.currentTarget.src = fallbackSrc
                }
              }}
            /> */}
            <SpeechBubble>{warningTextComponent}</SpeechBubble>
          </InnerContainer>
          <IconButton onClick={hideBanner} variant="text">
            <CloseIcon color="#FFFFFF" />
          </IconButton>
        </>
      )}
    </Container>
  );
};

export default PhishingWarningBanner;
