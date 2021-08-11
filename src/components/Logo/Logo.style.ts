import styled from "styled-components";

export interface LogoType {
  fontWeight?: number;
  fontSize?: "small" | "medium" | "large";
  color?: string;
}

export const StyledLogo = styled.span(({ styles }: { styles: LogoType }) => ({
  ...styles,
}));
