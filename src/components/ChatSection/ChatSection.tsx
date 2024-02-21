import { Box } from "@mui/material";
import wallpaper from "../../assets/wallpaper.jpg";
import ChatHeader from "./ChatHeader";
import MessageInputBar from "./MessageInputBar";
import Messages from "./Messages";

const ChatSection = () => {
  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // gridemplateColumns: 'auto auto auto',
      }}
    >
      <ChatHeader />
      <Box
        sx={{
          overflow: "auto",
        }}
      >
        <Messages />
      </Box>
      <Box sx={{ bottom: 0, width: "100%", position: "fixed" }}>
        <MessageInputBar />
      </Box>
    </Box>
  );
};

export default ChatSection;
