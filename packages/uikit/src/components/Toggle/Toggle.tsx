import React from "react";
import { Flex } from "../Box";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { ToggleProps, scales } from "./types";

const Toggle: React.FC<React.PropsWithChildren<ToggleProps>> = ({
  checked,
  defaultColor = "input",
  checkedColor = "success",
  scale = scales.LG,
  startIcon,
  endIcon,
  ...props
}) => {
  const isChecked = !!checked;

  return (
    <StyledToggle
      style={{ background: isChecked ? "#5C379E" : "#828282" }}
      $checked={isChecked}
      $checkedColor={checkedColor}
      $defaultColor={defaultColor}
      scale={scale}
    >
      <Input checked={checked} scale={scale} {...props} type="checkbox" />
      {startIcon && endIcon ? (
        <>
          <Handle scale={scale} style={{ background: isChecked ? "#FFBF00" : "#333333" }}>
            <Flex height="100%" alignItems="center" justifyContent="center">
              {checked ? endIcon(checked) : startIcon(!checked)}
            </Flex>
          </Handle>
          <Flex
            style={{ background: isChecked ? "#FFBF00" : "#333333" }}
            width="100%"
            height="100%"
            justifyContent="space-around"
            alignItems="center"
          >
            {startIcon()}
            {endIcon()}
          </Flex>
        </>
      ) : (
        <Handle style={{ background: isChecked ? "#FFBF00" : "#333333" }} scale={scale} />
      )}
    </StyledToggle>
  );
};

export default Toggle;
