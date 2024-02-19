import { Box } from '@mui/material';
import wallpaper from "../../assets/wallpaper.jpg";
import ChatHeader from './ChatHeader';
import MessageInputBar from './MessageInputBar';

const ChatSection = () => {
  return (
    <Box
    sx={{
      display:'grid',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${wallpaper})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      // gridemplateColumns: 'auto auto auto',

    }}
    >
      <ChatHeader />
      <MessageInputBar />
    </Box>
  );
};

export default ChatSection;
