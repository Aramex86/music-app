import { Typography } from "antd";
import { Colors } from "helpers/enums";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  color: ${Colors.White};
  width: 40%;
  text-transform: uppercase;
  cursor: pointer;
`;

export const StyledItem = styled.li`
  width: 100%;
  padding: 15px 0;
  text-align: center;
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    background-image: linear-gradient(to right, #1dc156 -41%, transparent 100%);
    width: 2px;
    height: 30px;
    top: 11px;
    left: 0;
    transition: all 0.5s ease;
  }
  &:hover {
    & a {
      color: ${Colors.MountainMeadow};
    }
    &::before {
      width: 50%;
      background-image: linear-gradient(
        to right,
        #1dc156 -41%,
        transparent 100%
      );
    }
  }
`;

export const StyledList = styled.ul`
  width: 100%;
  list-style: none;
`;
