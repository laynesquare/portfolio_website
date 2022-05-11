import { Container, Typography, Box, Grow } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '@mui/material';

const style = {
  line: {
    width: '100vw',
  },

  left: {
    width: '50vw',
    display: 'inline-block',
    color: '#1E625D',
    transform: 'skew(0deg, -15deg)',
    overflow: 'hidden',
  },

  leftContent: {
    width: '100vw',
    textAlign: 'center',
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
    transform: ' skew(0deg, 15deg)',
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
    textDecoration: 'underline',
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
    <Grow in>
      <Box
        sx={{
          mt: `${80 + windowDimenion.winWidth / 16}px`,
          fontSize: '8rem',
          lineHeight: '.8',

          textShadow: '0px 0px 10px rgba(50,,0,0.5)',
          zIndex: '-1',
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
                Hi, I'm Layne,
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
                Hi, I'm Layne,
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
                a web developer
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
                a web developer
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
                Welcome
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
                Welcome
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grow>
  );
};

export default Hero;
