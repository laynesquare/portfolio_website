import React from 'react';
import { Box, Typography } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';

const Footer = () => {
  return (
    <Box sx={{ width: '100%', p: '1rem' }}>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '0.6rem',
          textShadow: ' 0.5px 0.5px 1px #898989,   -0.5px -0.5px 1px #f7f4f4',
          //   color: mainTheme.palette.background.default,
        }}
      >
        © 2022 Layne Chen. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
