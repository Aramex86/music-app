import styled from "styled-components";
import avatar from "../../assets/17.jpg";

export const StyledUserProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-image: url(${avatar});
  background-size: cover;
  cursor: pointer;
`;
