import { useState } from 'react';
import {
  Typography,
  Box,
  Container,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';
import MailCarrier from './MailCarrier';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

const Contact = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  console.log(isMobile);
  const [contactMailCarrier, setContactMailCarrier] = useState(false);
  return (
    <Box
      id="contactSection"
      sx={{
        m: '0rem auto 0rem auto',
        p: '4rem 0rem 4rem 0rem',

        position: 'relative',
        width: '100%',
        maxWidth: '1200px',

        // background: 'grey',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant={isMobile ? 'h5' : 'h3'}
          textAlign={'center'}
          sx={{
            textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
            color: mainTheme.palette.background.default,

            p: '2rem',

            borderRadius: '50%',
            display: 'inline-block',
            borderLeft: '20px solid #CDCDCD',
            borderRight: '20px solid #CDCDCD',

            boxShadow:
              ' 5px 5px 9px #898989,  -5px -5px 9px #edeaea, inset 5px 5px 9px #898989, inset -5px -5px 9px #edeaea',

            mb: '2rem',
          }}
        >
          #Contact
        </Typography>
      </Box>
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
        <MailCarrier
          contactMailCarrier={contactMailCarrier}
          isMobile={isMobile}
        />
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
          component={'a'}
          href="mailto:laynechensquare@gmail.com"
          sx={{
            p: '2rem',
            // bgcolor: 'blue',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '32% 68% 41% 59% / 61% 59% 41% 39% ',
            color: mainTheme.palette.primary.main,
            transition: 'all .2s ease-in-out',
            textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',

            boxShadow: ' 4px 4px 8px #898989, -4px -4px 8px #edeaea',
            textDecoration: 'none',

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
          <MailRoundedIcon sx={{ mr: '0.5rem' }} /> Say Hello!
        </Typography>
        {/* <Box
          sx={{
            // backgroundColor: 'green',
            borderRadius: '50%',
            height: '35px',
            width: '35px',
            boxShadow: ' 4px 4px 8px #898989, -4px -4px 8px #edeaea',
            textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
            color: mainTheme.palette.background.default,
            background: 'linear-gradient(145deg, #dbdbdb, #b9b9b9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '1rem',
              backgroundColor: '#7C7C7C',
              color: 'transparent',
              textShadow: '2px 2px 3px rgba(255,255,255,0.5)',

              backgroundClip: 'text',
            }}
          >
            X
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Contact;
