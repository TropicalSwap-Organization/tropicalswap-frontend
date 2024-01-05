import styled from "styled-components";
import {
  Text,
  Flex,
  Heading,
  IconButton,
  ArrowBackIcon,
  NotificationDot,
  QuestionHelper,
} from "@pancakeswap/uikit";
import { useExpertModeManager } from "state/user/hooks";
import GlobalSettings from "components/Menu/GlobalSettings";
import Link from "next/link";
import Transactions from "./Transactions";
import { SettingsMode } from "../Menu/GlobalSettings/types";

interface Props {
  title: string;
  subtitle?: string;
  helper?: string;
  backTo?: string | (() => void);
  noConfig?: boolean;
}

// const AppHeaderContainer = styled(Flex)`
//   align-items: center;
//   justify-content: space-between;
//   padding: 24px;
//   width: 100%;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};

// `
const AppHeaderContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
  background: white;
`;

const AppHeader: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  subtitle,
  helper,
  backTo,
  noConfig = false,
}) => {
  const [expertMode] = useExpertModeManager();

  return (
    <AppHeaderContainer>
      <Flex alignItems="center" width="100%" style={{ gap: "16px" }}>
        {backTo &&
          (typeof backTo === "string" ? (
            <Link passHref href={backTo}>
              <IconButton as="a" scale="sm" color="#DA447B">
                <ArrowBackIcon
                  width="32px"
                  color="#DA447B"
                  style={{ color: "#DA447B" }}
                />
              </IconButton>
            </Link>
          ) : (
            <IconButton
              scale="sm"
              variant="text"
              color="#DA447B"
              onClick={backTo}
            >
              <ArrowBackIcon
                width="32px"
                color="#DA447B"
                style={{ color: "#DA447B" }}
              />
            </IconButton>
          ))}
        <Flex flexDirection="column" width="100%">
          <Flex mb="8px" alignItems="center" justifyContent="space-between">
            <Flex>
              <Heading color="#DA447B" style={{ color: "#DA447B" }} as="h2">
                {title}
              </Heading>
              {helper && (
                <QuestionHelper text={helper} ml="4px" placement="top-start" />
              )}
            </Flex>
            {!noConfig && (
              <Flex alignItems="center">
                <NotificationDot show={expertMode}>
                  <GlobalSettings
                    color="#DA447B"
                    mode={SettingsMode.SWAP_LIQUIDITY}
                  />
                </NotificationDot>
                <Transactions />
              </Flex>
            )}
          </Flex>
          <Flex alignItems="center">
            <Text color="#5C379E" style={{ color: "#5C379E" }} fontSize="14px">
              {subtitle}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </AppHeaderContainer>
  );
};

export default AppHeader;
