import { Colors } from "./../../helpers/enums/Colors/Colors";
import styled from "styled-components";

import { Input } from "antd";

export const StyledSearch = styled(Input)`
  background: ${Colors.EbonyClay};
  border: transparent;
  border-radius: 20px;
  & input {
    background: ${Colors.EbonyClay};
    color: ${Colors.White};
  }
`;
