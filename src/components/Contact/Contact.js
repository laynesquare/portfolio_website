import { useState } from 'react';
import { Typography, Box, Container, Tooltip } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';
import MailCarrier from './MailCarrier';

const Contact = () => {
  const [contactMailCarrier, setContactMailCarrier] = useState(false);
  return (
    <Box
      sx={{
        m: '0rem auto 4rem auto',
        position: 'relative',
        width: '75%',
        maxWidth: '1536px',
        // background: 'grey',
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
        onMouseEnter={() => setContactMailCarrier(true)}
        onMouseLeave={() => setContactMailCarrier(false)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          mb: '3rem',
        }}
      >
        <MailCarrier contactMailCarrier={contactMailCarrier} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          // bgcolor: 'red',
        }}
      >
        <Typography
          sx={{
            p: '1rem',
            // bgcolor: 'blue',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '1rem',
            transition: 'all .2s ease-in-out',
            textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',

            boxShadow: ' 4px 4px 8px #898989, -4px -4px 8px #edeaea',

            '&:active': {
              boxShadow:
                'inset 4px 4px 8px #898989, inset -4px -4px 8px #edeaea',
            },

            '&:hover': {
              boxShadow: '2px 2px 4px #898989, -2px -2px 4px #edeaea',
              '&:active': {
                boxShadow:
                  'inset 2px 2px 4px #898989, inset -2px -2px 4px #edeaea',
              },
            },
          }}
        >
          Say Hello!
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
