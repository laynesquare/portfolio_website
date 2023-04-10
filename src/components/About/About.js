import { Box, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';
import { useState } from 'react';
import Technologies from './Technologies';
import AvatarMan from './AvatarMan';
import separator from '../../assets/imgs/aboutTop3.svg';

const About = () => {
  const [aboutAvatarMan, setAboutAvatarMan] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ ...aboutStyle.separator }}></Box>
      <Box
        id="aboutSection"
        onMouseEnter={() => setAboutAvatarMan(true)}
        onMouseLeave={() => setAboutAvatarMan(false)}
        sx={{ ...aboutStyle.outerBox }}
      >
        <Box sx={{ ...aboutStyle.sectionTitle.inboxDisplay }}>
          <Typography
            variant={isMobile ? 'h5' : 'h3'}
            textAlign={'center'}
            sx={{ ...aboutStyle.sectionTitle.shapeAndFont }}
          >
            #About
          </Typography>
        </Box>
        <Box sx={{ ...aboutStyle.avatarAndIntro.box }}>
          <Box sx={{ ...aboutStyle.avatarAndIntro.avatar }}>
            <Box>
              <AvatarMan aboutAvatarMan={aboutAvatarMan} />
            </Box>
          </Box>
          <Box sx={{ ...aboutStyle.avatarAndIntro.textBox }}>
            <Typography sx={{ ...aboutStyle.avatarAndIntro.textBox.text }}>
              A self-taught front-end web developer; during the vocational
              course of English technical writing for FTTx networking
              components, I came across HTML/CSS/Javascript technologies, which
              sparked my interest in software development and propelled me to
              further pursue a career as a web developer.
            </Typography>
          </Box>
        </Box>
        <Technologies />
      </Box>
    </Box>
  );
};

const shadowGlobal = {
  boxInset: 'inset 2px 2px 4px #898989, inset -2px -2px 4px #edeaea',
  imgBox: '6px 6px 10px #898989, -6px -6px 10px #fcfcfc',
  text: '1px 1px 2px #898989, -1px -1px 2px #f7f4f4',
  box: '2px 2px 4px #898989, -2px -2px 4px #edeaea',
  titleBox:
    '5px 5px 9px #898989,  -5px -5px 9px #edeaea, inset 5px 5px 9px #898989, inset -5px -5px 9px #edeaea',
};

const aboutStyle = {
  separator: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('${separator}')`,
    backgroundSize: 'cover',
    aspectRatio: '3/1',
    transform: 'rotate(5deg) scale(1.1)',
    width: '100%',
  },

  outerBox: {
    maxWidth: '1200px',
    width: '100%',
    m: 'auto auto',
    p: '4rem 0rem',
  },

  sectionTitle: {
    inboxDisplay: {
      justifyContent: 'center',
      alignItems: 'center',
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

  avatarAndIntro: {
    box: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },

    avatar: {
      justifyContent: 'center',
      alignItems: 'center',
      flexBasis: '20%',
      flexGrow: '1',
      display: 'flex',
    },

    textBox: {
      alignItems: 'center',
      flexBasis: '80%',
      flexGrow: '9999',
      display: 'flex',
      p: '1rem',

      text: {
        textShadow: shadowGlobal.text,
        textAlign: 'justify',
        fontSize: '1rem',
      },
    },
  },
};

export default About;
