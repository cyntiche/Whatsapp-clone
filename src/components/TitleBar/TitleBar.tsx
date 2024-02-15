import copy from '@iconify/icons-fluent/copy-24-regular';
import dismiss from '@iconify/icons-fluent/dismiss-24-regular';
import subtract from '@iconify/icons-fluent/subtract-24-filled';
import { Icon } from '@iconify/react';
import { Box, Tooltip, Typography } from '@mui/material';
import whatsappLogo from '../../assets/whatsapp-logo.png';

const TitleBar = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        justifyItems: 'start',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: '10px 12px',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'column',
          gap: 0.5,
          alignItems: 'center',
        }}
      >
        <img
          src={whatsappLogo}
          alt="whatsapp"
          style={{ height: '20px', paddingRight: '10px' }}
        />
        <Typography
          sx={{
            color: 'white',
            fontWeight: 'lighter',
            fontSize: '12px',
            margin: '0px',
          }}
        >
          WhatsApp
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'column',
          alignItems: 'center',
          columnGap: 1,
        }}
      >
        <Tooltip arrow title="Minimize">
          <Icon icon={subtract} color="white" />
        </Tooltip>
        <Tooltip arrow title="Maximize">
          <Icon icon={copy} color="white" />
        </Tooltip>
        <Tooltip arrow title="Close">
          <Icon icon={dismiss} color="white" />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default TitleBar;
