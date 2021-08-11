import { ReactNode } from "react";
import { BoxType, StyledBox } from "./Box.style";

interface WithChildren extends BoxType {
  children?: ReactNode;
}

export const Box = ({ children, ...rest }: WithChildren) => {
  return <StyledBox styles={rest}>{children}</StyledBox>;
};
