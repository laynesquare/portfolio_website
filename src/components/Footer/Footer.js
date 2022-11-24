import { Box, Typography } from '@mui/material';
import footerBg from '../../assets/imgs/footerBg.svg';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '150px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow: 'visible',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        p: '0 0 12px 0',
      }}
    >
      <Typography
        variant="caption"
        sx={{
          // textShadow: '2px 2px 3px rgba(18,59,56,0.5)',
          // backgroundColor: '#091f1d',
          // backgroundClip: 'text',
          textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',

          textAlign: 'center',
          color: 'primary.main',
          fontFamily: 'Stalinist One',
        }}
      >
        © 2022 Layne Chen. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
