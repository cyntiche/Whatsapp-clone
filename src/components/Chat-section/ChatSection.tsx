import { Box } from '@mui/material';
import wallpaper from "../../assets/wallpaper.jpg";
import ChatHeader from './ChatHeader';

const ChatSection = () => {
  return (
    <Box
    sx={{
      width: '100%',
      height: '100%',
      backgroundImage: `url(${wallpaper})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <ChatHeader />
    </Box>
  );
};

export default ChatSection;
