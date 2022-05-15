import { Box, Grow, AppBar, Toolbar } from '@mui/material';
import { default as officialLogo } from '../../assets/imgs/official_logo.svg';

import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '@mui/material';

const style = {
  line: {
    width: '100vw',
    textShadow: ' 3px 3px 5px #898989,   -3px -3px 5px #edeaea',
  },

  left: {
    width: '50vw',
    display: 'inline-block',
    color: '#CDCDCD',

    // transform: 'skew(0deg, -15deg)',
    overflow: 'hidden',
  },

  leftContent: {
    width: '100vw',
    textAlign: 'center',
    color: 'gradient(rgba(188,37,103,1) 0%, rgba(101,47,141,1) 100%)',
  },

  leftSpan: {
    display: 'inline-block',
    transition: 'ease-out .6s',
    lineHeight: '.8',
  },

  right: {
    width: '50vw',
    display: 'inline-block',
    overflow: 'hidden',
    color: '#CDCDCD',

    // transform: ' skew(0deg, 15deg)',
  },

  rightContent: {
    width: '100vw',
    textAlign: 'center',
    transform: 'translate(-50vw)',
  },

  rightSpan: {
    display: 'inline-block',
    transition: 'ease-out .6s',
    lineHeight: '.8',
    // textDecoration: 'underline',
  },
};

const Hero = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const spansSlow = useRef([]);
  const spansFast = useRef([]);

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimenion]);

  const handleMouseMove = (e) => {
    let normalizedPosition = e.pageX / (windowDimenion.winWidth / 2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;

    if (!spansSlow?.current.length || !spansFast?.current.length) return;

    spansSlow.current.forEach((span, index) => {
      span.style.transform = `translate(${speedSlow}px )`;
    });

    spansFast.current.forEach((span, index) => {
      span.style.transform = `translate(${speedFast}px )`;
    });
  };

  window.addEventListener('mousemove', handleMouseMove);

  return (
    <Box className="hero-bg" sx={{ height: '100vh' }}>
      <Box
        sx={{
          component: 'img',
          position: 'absolute',
          minWidth: '30vh',
          maxWidth: '30vh',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'block',
          margin: 'auto',
          pointerEvents: 'none',
          p: '1rem',
          boxShadow: ' 3px 3px 5px #898989,   -3px -3px 5px #edeaea',
          borderRadius: '50%',

          // backgroundColor: 'red',
        }}
      >
        <Box
          component={'img'}
          className="logo_animation"
          src={officialLogo}
          alt="logo"
        ></Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',

          top: '45%',

          border: ' 5px solid #CDCDCD',
          fontSize: '7.5vw',
          lineHeight: '0.9',
        }}
      >
        {/* LINE1 */}
        {/* LINE1 */}
        {/* LINE1 */}
        {/* LINE1 */}
        {/* LINE1 */}
        {/* LINE1 */}
        {/* LINE1 */}

        <Box className="line" sx={style.line}>
          <Box className="left" sx={style.left}>
            <Box className="content" sx={style.leftContent}>
              <Box
                component={'span'}
                ref={(el) => {
                  spansFast.current[0] = el; //speedSlow
                }}
                className="spanSlow"
                sx={style.leftSpan}
              >
                HI, I'M LAYNE,
              </Box>
            </Box>
          </Box>
          {/* above is left           below is right */}
          <Box className="right" sx={style.right}>
            <Box className="content" sx={style.rightContent}>
              <Box
                component={'span'}
                className="spanSlow"
                ref={(el) => {
                  spansFast.current[1] = el; //speedSlow
                }}
                sx={style.rightSpan}
              >
                HI, I'M LAYNE,
              </Box>
            </Box>
          </Box>
        </Box>
        {/* LINE2 */}
        {/* LINE2 */}
        {/* LINE2 */}
        {/* LINE2 */}
        {/* LINE2 */}
        {/* LINE2 */}
        {/* LINE2 */}
        <Box className="line" sx={style.line}>
          <Box className="left" sx={style.left}>
            <Box className="content" sx={style.leftContent}>
              <Box
                component={'span'}
                ref={(el) => {
                  spansSlow.current[0] = el; //speedSlow
                }}
                className="spanSlow"
                sx={style.leftSpan}
              >
                A WEB
              </Box>
            </Box>
          </Box>
          {/* above is left           below is right */}
          <Box className="right" sx={style.right}>
            <Box className="content" sx={style.rightContent}>
              <Box
                component={'span'}
                className="spanSlow"
                ref={(el) => {
                  spansSlow.current[1] = el; //speedSlow
                }}
                sx={style.rightSpan}
              >
                A WEB
              </Box>
            </Box>
          </Box>
        </Box>
        {/* LINE3 */}
        {/* LINE3 */}
        {/* LINE3 */}
        {/* LINE3 */}
        {/* LINE3 */}
        {/* LINE3 */}
        <Box className="line" sx={style.line}>
          <Box className="left" sx={style.left}>
            <Box className="content" sx={style.leftContent}>
              <Box
                component={'span'}
                ref={(el) => {
                  spansFast.current[2] = el; //speedSlow
                }}
                className="spanSlow"
                sx={style.leftSpan}
              >
                DEVELOPER.
              </Box>
            </Box>
          </Box>
          {/* above is left           below is right */}
          <Box className="right" sx={style.right}>
            <Box className="content" sx={style.rightContent}>
              <Box
                component={'span'}
                className="spanSlow"
                ref={(el) => {
                  spansFast.current[3] = el; //speedSlow
                }}
                sx={style.rightSpan}
              >
                DEVELOPER.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
