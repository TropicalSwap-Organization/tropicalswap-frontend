import React, { useContext } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import { Flex } from "../Box";
import AnimatedIconComponent from "../Svg/AnimatedIconComponent";
import { StyledBottomNavItem, StyledBottomNavText } from "./styles";
import { BottomNavItemProps } from "./types";

const BottomNavItem: React.FC<React.PropsWithChildren<BottomNavItemProps>> = ({
  label,
  icon,
  fillIcon,
  href,
  showItemsOnMobile = false,
  isActive = false,
  disabled = false,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const bottomNavItemContent = (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" height="100%">
      {icon && (
        <AnimatedIconComponent
          icon={icon}
          fillIcon={fillIcon}
          height="22px"
          width="21px"
          // color={isActive ? "secondary" : "textSubtle"}
          color="#794BCC"
          isActive={isActive}
          activeBackgroundColor="backgroundAlt"
          // activeBackgroundColor="#794BCC"
          // style={{ background: "white"}}
        />
      )}
      <StyledBottomNavText
        // color={isActive ? "text" : "textSubtle"}
        color="#794BCC"
        fontWeight={isActive ? "600" : "400"}
        fontSize="10px"
        style={{ color: "#794BCC" }}
      >
        {label}
      </StyledBottomNavText>
    </Flex>
  );

  return showItemsOnMobile ? (
    <StyledBottomNavItem style={{ opacity: disabled ? 0.5 : 1, background: "white" }} type="button" {...props}>
      {bottomNavItemContent}
    </StyledBottomNavItem>
  ) : (
    <StyledBottomNavItem
      style={{ opacity: disabled ? 0.5 : 1, background: "white" }}
      as={linkComponent}
      href={href}
      {...props}
    >
      {bottomNavItemContent}
    </StyledBottomNavItem>
  );
};

export default BottomNavItem;
