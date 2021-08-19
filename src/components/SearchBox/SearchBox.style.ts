import { Colors } from "./../../helpers/enums/Colors/Colors";
import styled from "styled-components";

import { Input } from "antd";

export const StyledSearch = styled(Input)`
  background: ${Colors.EbonyClay};
  border: transparent;
  & input {
    background: ${Colors.EbonyClay};
    color: ${Colors.White};
  }
`;
