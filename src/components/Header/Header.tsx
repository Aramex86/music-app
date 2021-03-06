import { Box } from "components/Box/Box";
import { Logo } from "components/Logo/Logo";
import { SearchBox } from "components/SearchBox/SearchBox";
import { Colors } from "helpers/enums";
import React from "react";
import { StyledHeader } from "./Header.style";
import { AiOutlineSearch } from "react-icons/ai";
import { UserBox } from "components/UserBox/UserBox";

export const Header = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <StyledHeader>
      <Box
        padding="25px 10px  25px 0"
        display="flex"
        justifyContent="space-between"
      >
        <Box width="10%" textAlign="left" padding="0 50px">
          <Logo
            fontSize="large"
            fontWeight={900}
            color={`${Colors.MountainMeadow}`}
          >
            MUSICLY
          </Logo>
        </Box>
        <Box width="50%" justifyContent="center">
          <SearchBox
            onChange={handleChange}
            placeholder="Search for songs..."
            prefix={<AiOutlineSearch fill={Colors.White} size={16} />}
          />
        </Box>
        <Box width="10%">
          <UserBox />
        </Box>
      </Box>
    </StyledHeader>
  );
};
