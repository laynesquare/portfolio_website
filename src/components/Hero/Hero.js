import { useState, useEffect, useRef } from 'react';
import { default as officialLogo } from '../../assets/imgs/official_logo.svg';
import { default as gitIcon } from '../../assets/imgs/github_icon.svg';
import { Box, Grid } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';

const Hero = () => {
  const [spansSlow, spansFast] = [useRef([]), useRef([])];
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () =>
    detectHW({ winWidth: window.innerWidth, winHeight: window.innerHeight });

  const handleMouseMove = (e) => {
    let normalizedPosition = e.pageX / (windowDimenion.winWidth / 2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;

    spansSlow.current.forEach(
      (span, index) => (span.style.transform = `translate(${speedSlow}px )`)
    );
    spansFast.current.forEach(
      (span, index) => (span.style.transform = `translate(${speedFast}px )`)
    );
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    window.addEventListener('mousemove', handleMouseMove);
  }, [windowDimenion]);

  return (
    <Box id="homeSection" className="hero-bg" sx={style.mostOuterBox}>
      <Box sx={style.logoBox}>
        <Box
          component={'img'}
          className="logo_animation"
          src={officialLogo}
          alt="logo"
          sx={style.logoBox.logoImg}
        ></Box>
      </Box>

      <Box sx={style.bannerBox}>
        <DisplayPerLine
          refernceElement={[0, 1]}
          speed={spansFast}
          layer={1}
          text={"Hi, I'm Layne,"}
        />
        <DisplayPerLine
          refernceElement={[0, 1]}
          speed={spansSlow}
          layer={2}
          text={'a Web'}
        />
        <DisplayPerLine
          refernceElement={[2, 3]}
          speed={spansFast}
          layer={3}
          text={'Developer.'}
        />
      </Box>

      <Grid container sx={style.linkShortcutBox}>
        <Grid
          component={'img'}
          item
          src={gitIcon}
          sx={style.linkShortcutBox.gitIcon}
        ></Grid>
        <Grid
          component={'a'}
          item
          href="mailto:laynechensquare@gmail.com"
          sx={style.linkShortcutBox.mail}
        >
          laynechensquare@gmail.com
        </Grid>
      </Grid>
    </Box>
  );
};

const DisplayPerLine = ({ text, speed, refernceElement, layer }) => {
  return (
    <>
      {/* Left Span */}
      <Box sx={style.line}>
        <Box sx={style.left}>
          <Box sx={style.leftContent}>
            <Box
              component={'span'}
              ref={(el) => (speed.current[refernceElement[0]] = el)}
              sx={style.leftSpan(layer)}
            >
              {text}
            </Box>
          </Box>
        </Box>

        {/* Right Span */}
        <Box sx={style.right}>
          <Box sx={style.rightContent}>
            <Box
              component={'span'}
              ref={(el) => (speed.current[refernceElement[1]] = el)}
              sx={style.rightSpan(layer)}
            >
              {text}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const style = {
  mostOuterBox: {
    fontFamily: 'Stalinist One',
    overflowX: 'hidden',
    maxWidth: '100%',
    height: '100vh',
  },

  logoBox: {
    pointerEvents: 'none',
    borderRadius: '50%',
    boxShadow: '3px 3px 5px #898989, -3px -3px 5px #edeaea',
    transform: 'translateX(-50%)',
    component: 'img',
    position: 'absolute',
    display: 'block',
    margin: 'auto',
    left: '50%',
    top: '10%',
    p: '0.5rem 0.5rem 0.15rem 0.5rem',

    logoImg: {
      minWidth: '30vh',
      minHeight: '30vh',
    },
  },

  bannerBox: {
    lineHeight: '0.95',
    position: 'absolute',
    fontSize: '6.5vw',
    top: { xs: '50%', sm: '45%' },
  },

  linkShortcutBox: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    minWidth: '360px',
    display: 'flex',
    bottom: '2rem',
    p: '0rem 1rem',

    gitIcon: {
      borderRadius: '50%',
      boxShadow: '2px 2px 4px #898989, -2px -2px 4px #edeaea',
      border: '2px solid #CDCDCD',
      width: '2rem',
      mr: '1rem',
    },

    mail: {
      textDecoration: 'none',
      textShadow: ' 1px 1px 2px #898989, -1px -1px 2px #f7f4f4',
      fontFamily: 'Krona One',
      color: mainTheme.palette.primary.main,
    },
  },

  line: {
    textShadow: '2px 2px 5px #898989, -2px -2px 5px #edeaea',
    width: '100vw',
  },

  left: {
    overflow: 'hidden',
    display: 'inline-block',
    width: '50vw',
  },

  leftContent: {
    textAlign: 'center',
    width: '100vw',
  },

  leftSpan: (layer) => ({
    transition: 'ease-out .6s',
    lineHeight: '.9',
    display: 'inline-block',
    color:
      layer % 2 === 0
        ? mainTheme.palette.background.default
        : mainTheme.palette.primary.light,
  }),

  right: {
    overflow: 'hidden',
    display: 'inline-block',
    width: '50vw',
  },

  rightContent: {
    transform: 'translate(-50vw)',
    textAlign: 'center',
    width: '100vw',
  },

  rightSpan: (layer) => ({
    transition: 'ease-out .6s',
    lineHeight: '.8',
    display: 'inline-block',
    color:
      layer % 2 === 0
        ? mainTheme.palette.primary.light
        : mainTheme.palette.background.default,
  }),
};

export default Hero;
