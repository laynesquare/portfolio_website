import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={style.outerBox}>
      <Typography variant="caption" sx={style.text}>
        © 2022 Layne Chen. All Rights Reserved.
      </Typography>
    </Box>
  );
};

const style = {
  outerBox: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'flex-end',
    overflow: 'visible',
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '150px',
    p: '0 0 12px 0',
  },
  text: {
    textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
    fontFamily: 'Stalinist One',
    textAlign: 'center',
    color: 'primary.main',
  },
};

export default Footer;
