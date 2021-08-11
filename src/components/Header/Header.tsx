import { Box } from "components/Box/Box";
import { Logo } from "components/Logo/Logo";
import { Colors } from "helpers/enums";
import { StyledHeader } from "./Header.style";

export const Header = () => {
  return (
    <StyledHeader>
      <Box
        padding="25px 10px  25px 0"
        display="flex"
        justifyContent="space-between"
      >
        <Box width="140px" textAlign="center">
          <Logo
            fontSize="large"
            fontWeight={900}
            color={`${Colors.MountainMeadow}`}
          >
            MUSICLY
          </Logo>
        </Box>
        <Box>Search</Box>
        <Box>User</Box>
      </Box>
    </StyledHeader>
  );
};
