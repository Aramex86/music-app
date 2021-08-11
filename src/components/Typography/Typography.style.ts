import { Colors } from "helpers/enums";
import { Typography } from "antd";
import styled from "styled-components";

export const StyledTypography = styled(Typography.Title)(
  ({ children, ...props }: Record<string, any>) => ({
    "&.ant-typography": {
      color: Colors.RadicalRed,
      marginTop: 0,
      marginLeft: 40,
      marginBottom: 0,
      fontSize: 12,
      ...props,
    },
  })
);
