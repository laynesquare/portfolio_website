import { Typography, Box, Container } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';

const Contact = () => {
  return (
    <Box
      sx={{
        m: 'auto auto',
        position: 'relative',
        width: '75%',
        maxWidth: '1536px',
        // background: 'grey',
        height: '100vh',
      }}
    >
      <Typography
        variant="h2"
        textAlign={'center'}
        sx={{
          textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
          color: mainTheme.palette.background.default,
          mb: '4rem',
        }}
      >
        ＃Contact
      </Typography>
      <Box
        sx={{
          boxShadow: ' 3px 3px 6px #898989,   -3px -3px 6px #fcfcfc',
          pt: '2rem',
          width: '50%',
          height: '50%',
          display: 'block',
          margin: 'auto',
          borderRadius: '1rem',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            mb: '4rem',
            textShadow: ' 2px 2px 4px #898989, -2px -2px 4px #f7f4f4',
            // color: mainTheme.palette.background.default,
          }}
        >
          Get in touch
        </Typography>
        <Box
          sx={{
            borderRadius: '1rem',
            width: '40%',
            p: '0.5rem',
            display: 'block',
            m: 'auto',
            boxShadow: ' 6px 6px 10px #898989,   -6px -6px 10px #fcfcfc',
          }}
        >
          <Typography sx={{ textAlign: 'center' }}>Say hello!</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
