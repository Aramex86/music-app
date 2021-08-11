import { Box } from "components/Box/Box";
import { StyledTypography } from "components/Typography/Typography.style";
import { Colors } from "helpers/enums";
import { Browse, Home, Radio } from "pages";
import { Route, Switch } from "react-router-dom";
import { StyledItem, StyledLink, StyledList } from "./SideMenu.style";

export const SideMenu = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        width="160px"
        alignItems="center"
        justifyContent="flex-start"
        backgroundColor={`${Colors.EbonyClay}`}
        height={"100vh"}
      >
        <StyledList>
          <StyledItem>
            <StyledLink to="/">home</StyledLink>
          </StyledItem>
          <StyledItem>
            {" "}
            <StyledLink to="/browse">browse</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/radio">radio</StyledLink>
          </StyledItem>
        </StyledList>

        <StyledList>
          <StyledTypography>YOUR LIBRARY</StyledTypography>
          <StyledItem>
            <StyledLink to="/recent">recent played</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/favorite">favorite songs</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/Artists">Artists</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/albums">albums</StyledLink>
          </StyledItem>
        </StyledList>

        <StyledList>
          <StyledTypography>PLAYLISTS</StyledTypography>
          <StyledItem>
            <StyledLink to="/albums">hindi top 50</StyledLink>
          </StyledItem>
          <StyledItem>
            {" "}
            <StyledLink to="/pop">pop 50</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/romance">romance season</StyledLink>
          </StyledItem>
        </StyledList>
      </Box>
      <Switch>
        <Route path="/browse" component={Browse} />
        <Route path="/radio" component={Radio} />
        <Route path="/" component={Home} exact />
      </Switch>
    </>
  );
};
