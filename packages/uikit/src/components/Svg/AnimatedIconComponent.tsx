import { StyledAnimatedIconComponent, StyledIconContainer } from "./styles";
import { IconComponentType } from "./types";

const AnimatedIconComponent: React.FC<React.PropsWithChildren<IconComponentType>> = ({
  icon,
  fillIcon,
  color = "white",
  activeColor = "#794BCC",
  activeBackgroundColor,
  isActive = false,
  ...props
}) => {
  const IconElement = icon;
  const IconElementFill = fillIcon;
  return IconElement ? (
    <StyledAnimatedIconComponent style={{ background: "white" }} isActive={isActive} hasFillIcon={!!IconElementFill} {...props}>
      <StyledIconContainer style={{ background: "white" }} activeBackgroundColor={activeBackgroundColor}>
        <IconElement color={color} />
      </StyledIconContainer>
      {!!IconElementFill && (
        <StyledIconContainer style={{ background: "white" }} activeBackgroundColor={activeBackgroundColor} {...props}>
          <IconElementFill style={{ background: "white" }} color={activeColor} />
        </StyledIconContainer>
      )}
    </StyledAnimatedIconComponent>
  ) : null;
};

export default AnimatedIconComponent;
