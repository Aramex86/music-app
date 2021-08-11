import { Colors } from "helpers/enums";
import React, { ReactNode } from "react";
import { LogoType, StyledLogo } from "./Logo.style";

interface WithProps extends LogoType {
  children: ReactNode;
}

export const Logo = ({ children, ...rest }: WithProps) => {
  console.log(rest);
  return <StyledLogo styles={rest}>{children}</StyledLogo>;
};
