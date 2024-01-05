import styled from "styled-components";
import { Box } from "@pancakeswap/uikit";

const Card = styled(Box)<{
  width?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
}>`
  width: ${({ width }) => width ?? "100%"};
  padding: ${({ padding }) => padding ?? "1.25rem"};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius ?? "16px"};
  background-color: ${({ theme }) => theme.colors.background};
`;
export default Card;

/* export const LightCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`; */

export const LightCard = styled(Card)`
  background-color: white;
`;

/*export const LightGreyCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background-color: ${({ theme }) => theme.colors.background};
`*/

export const LightGreyCard = styled(Card)`
  background-color: #f7f7f7;
`;

/*export const GreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.dropdown};
`*/

export const GreyCard = styled(Card)`
  background-color: #4f4f4f;
`;
