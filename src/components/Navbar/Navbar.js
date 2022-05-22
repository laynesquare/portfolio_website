import React from 'react';
import {
  Container,
  AppBar,
  Box,
  Toolbar,
  Grid,
  useMediaQuery,
} from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';
import { useState, useRef, useEffect } from 'react';

const navItemStyle = {
  textAlign: 'center',

  backgroundColor: '#7C7C7C',
  color: 'transparent',
  textShadow: '2px 2px 3px rgba(255,255,255,0.5)',
  backgroundClip: 'text',
  ':hover': {
    backgroundColor: '#7C7C7C',
  },
};

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const navBarOnScroll = useRef(null);

  const [prevScrollpos, setPrevScrollpos] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleSroll);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', handleSroll);
      };
    }
  }, [prevScrollpos]);

  const handleSroll = (e) => {
    if (prevScrollpos > window.scrollY) {
      navBarOnScroll.current.style.top = 0;
    } else if (prevScrollpos < window.scrollY) {
      navBarOnScroll.current.style.top = '-170px';
    }
    setPrevScrollpos(window.scrollY);
  };

  return (
    <Box>
      <AppBar>
        <Grid
          ref={navBarOnScroll}
          container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            bgcolor: mainTheme.palette.background.default,
            alignItems: 'center',
            boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.2)',
            fontSize: isMobile ? '0.1rem' : '1rem',
            // flexWrap: 'nowrap',
            p: '0.5rem',
            justifyContent: 'space-around',
            // height: '2.5rem',
            position: 'fixed',
            zIndex: '1',
            transition: 'all 0.5s ease-in-out',
            top: '0px',
          }}
        >
          <Grid item sx={{ ...navItemStyle }}>
            #Home
          </Grid>
          <Grid
            item
            sx={{
              ...navItemStyle,
            }}
          >
            #About
          </Grid>
          <Grid
            item
            sx={{
              ...navItemStyle,
            }}
          >
            #Project
          </Grid>
          <Grid
            item
            sx={{
              ...navItemStyle,
            }}
          >
            #Contact
          </Grid>
          <Grid
            item
            sx={{
              ...navItemStyle,
            }}
          >
            #Resume
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Navbar;
