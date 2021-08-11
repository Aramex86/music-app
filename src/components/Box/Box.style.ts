import styled from "styled-components";

export interface BoxType {
  display?: "block" | "flex";
  width?: number | "auto" | string;
  height?: number | "auto" | string;
  justifyContent?:
    | "initial"
    | "space-between"
    | "center"
    | "space-around"
    | "space-evenly"
    | "flex-start";
  textAlign?: "initial" | "center" | "left" | "right";
  alignItems?: "normal" | "center" | "left" | "right" | "flex-start";
  flexDirection?: "row" | "column";
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  color?: string;
  fontWeight?: number;
  overflow?: "auto";
  flexWrap?: "wrap";
  maxHeight?: string;
  padding?: string;
  backgroundColor?: string;
}

export const StyledBox = styled.div(({ styles }: { styles: BoxType }) => ({
  ...styles,
}));
