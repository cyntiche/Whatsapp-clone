import copy from '@iconify/icons-fluent/copy-24-regular';
import dismiss from '@iconify/icons-fluent/dismiss-24-regular';
import subtract from '@iconify/icons-fluent/subtract-24-filled';
import { Icon, IconifyIcon } from '@iconify/react';
import { Box, Tooltip, Typography } from '@mui/material';
import whatsappLogo from '../../assets/whatsapp-logo.png';

const TitleBar = () => {
  const icons: { title: string; icon: IconifyIcon; color: string }[] = [
    {
      title: 'Minimize',
      icon: subtract,
      color: 'white',
    },
    {
      title: 'Maximize',
      icon: copy,
      color: 'white',
    },
    {
      title: 'Close',
      icon: dismiss,
      color: 'white',
    },
  ];
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        justifyItems: 'start',
        alignItems: 'center',
        backgroundColor: '#202020',
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
        {icons.map(({ title, icon, color }, index) => (
          <Tooltip arrow title={title}>
            <Icon icon={icon} color={color} />
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default TitleBar;
