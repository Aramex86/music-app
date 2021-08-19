import { StyledUserProfile } from "./UserBox.style";
import { AiOutlineSetting } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { Box } from "components/Box/Box";

export const UserBox = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 25px"
    >
      <AiOutlineSetting size={18} style={{ cursor: "pointer" }} />
      <MdNotifications size={18} style={{ cursor: "pointer" }} />
      <StyledUserProfile />
    </Box>
  );
};
