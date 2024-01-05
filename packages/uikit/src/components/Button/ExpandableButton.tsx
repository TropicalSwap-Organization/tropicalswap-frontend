import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";

interface Props {
  onClick?: () => void;
  expanded?: boolean;
}

export const ExpandableButton: React.FC<React.PropsWithChildren<Props>> = ({ onClick, expanded, children }) => {
  return (
    <IconButton aria-label="Hide or show expandable content" onClick={onClick} style={{ color: "#400C8B" }}>
      {children}
      {expanded ? <ChevronUpIcon color="#400C8B" style={{ color: "#400C8B" }}/> : <ChevronDownIcon color="#400C8B" style={{ color: "#400C8B" }}/>}
    </IconButton>
  );
};
ExpandableButton.defaultProps = {
  expanded: false
};

export const ExpandableLabel: React.FC<React.PropsWithChildren<Props>> = ({ onClick, expanded, children }) => {
  return (
    <Button
      variant="text"
      aria-label="Hide or show expandable content"
      onClick={onClick}
      endIcon={expanded ? <ChevronUpIcon color="#400C8B" /> : <ChevronDownIcon color="#400C8B" />}
      style={{ color: "#400C8B" }}
    >
      {children}
    </Button>
  );
};
ExpandableLabel.defaultProps = {
  expanded: false
};
