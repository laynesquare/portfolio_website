import { Box, Typography } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';
import Technologies from './Technologies';
import AvatarMan from './AvatarMan';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';

const About = () => {
  const [aboutAvatarMan, setAboutAvatarMan] = useState(false);
  const [isMobile, setIsMobile] = useState(
    useMediaQuery(mainTheme.breakpoints.down('sm'))
  );

  return (
    <>
      <Box
        onMouseEnter={() => setAboutAvatarMan(true)}
        onMouseLeave={() => setAboutAvatarMan(false)}
        sx={{
          width: '100%',
          m: '2rem auto',

          maxWidth: '1200px',
        }}
      >
        <Typography
          variant="h2"
          textAlign={'center'}
          sx={{
            textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
            color: mainTheme.palette.background.default,
            // mb: '2rem',
          }}
        >
          ＃About
        </Typography>
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
              // bgcolor: 'red',
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
                // bgcolor: 'green',
                border: '5px solid #CDCDCD',

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
              // bgcolor: 'blue',
            }}
          >
            <Typography
              sx={{
                fontSize: '1rem',
                textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
                textAlign: 'center',
              }}
            >
              My name is Layne Chen, and I am a self-taught web developer who
              has worked with the following technologies.
            </Typography>
          </Box>
        </Box>

        <Technologies />
      </Box>
    </>
  );
};

export default About;
