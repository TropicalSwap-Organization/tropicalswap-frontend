import styled from "styled-components";
import { Flex } from "../Box";

// const StyledBottomNav = styled(Flex)`
//   position: fixed;
//   bottom: 0px;
//   width: 100%;
//   padding: 5px 8px;
//   background: ${({ theme }) => theme.colors.backgroundAlt};
//   border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
//   padding-bottom: env(safe-area-inset-bottom);
//   html[data-useragent*="TokenPocket_iOS"] & {
//     padding-bottom: 45px;
//   }
//   z-index: 20;
// `;

const StyledBottomNav = styled(Flex)`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 5px 8px;
  background: white;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  border-top: 4px solid #794BCC;
  padding-bottom: env(safe-area-inset-bottom);
  html[data-useragent*="TokenPocket_iOS"] & {
    padding-bottom: 45px;
  }
  z-index: 20;
`;

export default StyledBottomNav;
