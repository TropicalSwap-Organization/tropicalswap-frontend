import { MouseEvent, ReactNode } from "react";

export type AlertTheme = {
  background: string;
};

export const variants = {
  INFO: "info",
  DANGER: "#DA447B",
  SUCCESS: "#228546",
  WARNING: "warning",
} as const;

export type Variants = (typeof variants)[keyof typeof variants];

export interface AlertProps {
  variant?: Variants;
  title: string;
  children?: ReactNode;
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
}
