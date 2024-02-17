import { Box } from '@mui/material';
import React from 'react';
import wallpaper from "../../assets/wallpaper.jpg"

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
    </Box>
  );
};

export default ChatSection;
