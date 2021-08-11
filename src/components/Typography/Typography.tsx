import React from "react";
import { ReactNode } from "react";
import { StyledTypography } from "./Typography.style";

interface WithProps {
  children: ReactNode;
}

export const Typography = ({ children }: { children: WithProps }) => {
  return <StyledTypography>{children}</StyledTypography>;
};
