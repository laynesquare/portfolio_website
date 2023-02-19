import { Typography, Box, useMediaQuery } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';
import { useState } from 'react';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import MailCarrier from './MailCarrier';
import separator from '../../assets/imgs/aboutTop3.svg';

const Contact = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [contactMailCarrier, setContactMailCarrier] = useState(false);

  return (
    <>
      <Box sx={{ ...contactStyle.separator }}></Box>
      <Box id="contactSection" sx={{ ...contactStyle.outerBox }}>
        <Box sx={{ ...contactStyle.contactTitle.inboxDisplay }}>
          <Typography
            variant={isMobile ? 'h5' : 'h3'}
            textAlign={'center'}
            sx={{ ...contactStyle.contactTitle.shapeAndFont }}
          >
            #Contact
          </Typography>
        </Box>
        <Box
          onMouseEnter={() => setContactMailCarrier(true)}
          onMouseLeave={() => setContactMailCarrier(false)}
          sx={{ ...contactStyle.mailCarrierBox }}
        >
          <MailCarrier
            contactMailCarrier={contactMailCarrier}
            isMobile={isMobile}
          />
        </Box>
        <Box sx={{ ...contactStyle.sayHelloBox }}>
          <Typography
            component={'a'}
            href="mailto:laynechensquare@gmail.com"
            sx={{ ...contactStyle.sayHelloBox.btn }}
          >
            <MailRoundedIcon sx={{ mr: '0.5rem' }} /> Say Hello!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

const shadowGlobal = {
  boxOutsetHalf: '2px 2px 4px #898989, -2px -2px 4px #edeaea',
  boxOutsetFull: '4px 4px 8px #898989, -4px -4px 8px #edeaea',
  boxInsetFull: 'inset 4px 4px 8px #898989, inset -4px -4px 8px #edeaea',
  text: '1px 1px 2px #898989, -1px -1px 2px #f7f4f4',
  titleBox:
    '5px 5px 9px #898989,  -5px -5px 9px #edeaea, inset 5px 5px 9px #898989, inset -5px -5px 9px #edeaea',
};

const contactStyle = {
  separator: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('${separator}')`,
    backgroundSize: 'cover',
    aspectRatio: '3/1',
    transform: 'rotate(-3deg) scale(1.1)',
    width: '100%',
  },

  outerBox: {
    maxWidth: '1200px',
    width: '100%',
    m: 'auto auto',
    p: '4rem 0rem',
  },

  contactTitle: {
    inboxDisplay: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      display: 'flex',
    },

    shapeAndFont: {
      borderRadius: '50%',
      borderRight: '20px solid #CDCDCD',
      textShadow: shadowGlobal.text,
      borderLeft: '20px solid #CDCDCD',
      boxShadow: shadowGlobal.titleBox,
      display: 'inline-block',
      color: mainTheme.palette.background.default,
      mb: '2rem',
      p: '2rem',
    },
  },

  mailCarrierBox: {
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    mb: '3rem',
  },

  sayHelloBox: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '100%',

    btn: {
      justifyContent: 'center',
      textDecoration: 'none',
      borderRadius: '32% 68% 41% 59% / 61% 59% 41% 39%',
      transition: 'all .2s ease-in-out',
      alignItems: 'center',
      textShadow: shadowGlobal.text,
      boxShadow: shadowGlobal.boxOutsetFull,
      textAlign: 'center',
      display: 'flex',
      color: mainTheme.palette.primary.main,
      p: '2rem',

      '&:hover': {
        boxShadow: shadowGlobal.boxOutsetHalf,

        '&:active': {
          boxShadow: shadowGlobal.boxInsetFull,
        },
      },
    },
  },
};

export default Contact;
