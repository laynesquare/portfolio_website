import { Box, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';
import { useState } from 'react';
import Technologies from './Technologies';
import AvatarMan from './AvatarMan';
import aboutTop from '../../assets/imgs/aboutTop3.svg';

const About = () => {
  const [aboutAvatarMan, setAboutAvatarMan] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          width: '100%',
          aspectRatio: '3/1',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url('${aboutTop}')`,
          overflow: 'visible',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          // p: '0 0 12px 0',
          transform: 'rotate(5deg) scale(1.1)',
          overflowX: 'hidden',
        }}
      ></Box>
      <Box
        id="aboutSection"
        onMouseEnter={() => setAboutAvatarMan(true)}
        onMouseLeave={() => setAboutAvatarMan(false)}
        sx={{
          maxWidth: '1200px',
          width: '100%',
          m: 'auto auto',
          p: '4rem 0rem',
          // transform: 'translateY(-100px)',
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
            }}
          >
            #About
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              flexBasis: '20%',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexGrow: '1',
            }}
          >
            <Box
              sx={{
                width: '200px',
                height: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <AvatarMan aboutAvatarMan={aboutAvatarMan} />
            </Box>
          </Box>
          <Box
            sx={{
              flexBasis: '80%',
              flexGrow: '9999',
              display: 'flex',
              alignItems: 'center',
              p: '1rem',
            }}
          >
            <Typography
              sx={{
                fontSize: '1rem',
                textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
                textAlign: 'justify',
              }}
            >
              My name is Layne Chen, a self-taught front-end web developer;
              during the vocational course of English technical writing for FTTx
              networking components, I came across HTML / CSS / Javascript
              technologies, and an interest in software development is thus
              sparked.
            </Typography>
          </Box>
        </Box>

        <Technologies />
      </Box>
    </Box>
  );
};

export default About;
