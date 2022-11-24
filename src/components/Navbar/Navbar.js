import { AppBar, Box, Typography, Grid, useMediaQuery } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import { mainTheme } from '../../themes/mainTheme';

const navItemStyle = {
  textShadow: '2px 2px 3px rgba(255,255,255,0.5)',
  backgroundColor: '#7C7C7C',
  backgroundClip: 'text',
  textDecoration: 'none',
  textAlign: 'center',
  color: 'transparent',
  ':hover': {
    color: mainTheme.palette.background.default,
    textShadow: ' 0.5px 0.5px 1px #898989,   -0.5px -0.5px 1px #f7f4f4',
  },
};

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const navBarOnScroll = useRef(null);
  const menuForMobile = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleSroll);
      return () => window.removeEventListener('scroll', handleSroll);
    }
  }, [prevScrollpos]);

  useEffect(() => {
    window.addEventListener('click', handleClickOutsideOfMobileMenu);

    return () =>
      window.removeEventListener('click', handleClickOutsideOfMobileMenu);
  });

  const handleClickOutsideOfMobileMenu = (e) => {
    if (!isMobileMenuOpen) return;

    if (e.clientY > 300) {
      handleMobileMenu();
    }
  };

  const handleSroll = (e) => {
    if (prevScrollpos > window.scrollY) {
      navBarOnScroll.current.style.top = 0;
    } else if (prevScrollpos < window.scrollY) {
      navBarOnScroll.current.style.top = '-170px';
    }
    setPrevScrollpos(window.scrollY);

    if (isMobileMenuOpen) handleMobileMenu();
  };

  const handleMobileMenu = () => {
    if (isMobileMenuOpen) {
      menuForMobile.current.style.opacity = '0';
    } else {
      menuForMobile.current.style.opacity = '1';
    }

    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (isMobile)
    return (
      <Box>
        <AppBar>
          <Box
            ref={menuForMobile}
            sx={{
              position: 'absolute',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              transition: 'all 0.2s ease-in-out',
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2) ,rgba(0,0,0,0))',
              opacity: '0',
            }}
          >
            <Box
              sx={{
                // bgcolor: 'red',
                // p: '1rem',
                bgcolor: mainTheme.palette.background.default,
                borderRadius: '3rem',
                p: '0.5rem 1.5rem',
                width: '100%',
                m: '4rem 1rem 6rem 1rem',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                border: '3px solid #CDCDCD',
                boxShadow:
                  'inset 5px 5px 9px #898989, inset -5px -5px 9px #edeaea',
              }}
            >
              <Grid
                item
                component={'a'}
                href={'#homeSection'}
                sx={{ ...navItemStyle, p: '0.5rem' }}
              >
                #Home
              </Grid>
              <Grid
                component={'a'}
                href={'#aboutSection'}
                item
                sx={{
                  ...navItemStyle,
                  p: '0.5rem',
                }}
              >
                #About
              </Grid>
              <Grid
                component={'a'}
                href={'#projectSection'}
                item
                sx={{
                  ...navItemStyle,
                  p: '0.5rem',
                }}
              >
                #Project
              </Grid>
              <Grid
                component={'a'}
                href={'#contactSection'}
                item
                sx={{
                  ...navItemStyle,
                  p: '0.5rem',
                }}
              >
                #Contact
              </Grid>
              <Grid
                item
                sx={{
                  ...navItemStyle,
                  p: '0.5rem',
                }}
              >
                #Resume
              </Grid>
            </Box>
          </Box>
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
              flexWrap: 'nowrap',
              p: '0.5rem',
              justifyContent: 'space-around',
              position: 'fixed',
              zIndex: '10',
              transition: 'all 0.5s ease-in-out',
              top: '0px',
            }}
          >
            <Box
              onClick={handleMobileMenu}
              sx={{
                // backgroundColor: 'green',
                borderRadius: '50%',
                height: '30px',
                width: '30px',
                boxShadow: isMobileMenuOpen
                  ? ' inset 2px 2px 4px #898989, inset -2px -2px 4px #edeaea'
                  : ' 4px 4px 8px #898989, -4px -4px 8px #edeaea',

                textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
                color: mainTheme.palette.background.default,
                background: 'linear-gradient(145deg, #dbdbdb, #b9b9b9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  backgroundColor: '#7C7C7C',
                  color: 'transparent',
                  textShadow: '2px 2px 3px rgba(255,255,255,0.5)',
                  backgroundClip: 'text',
                }}
              >
                ≡
              </Typography>
            </Box>
          </Grid>
        </AppBar>
      </Box>
    );

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
          <Grid
            item
            component={'a'}
            href={'#homeSection'}
            sx={{ ...navItemStyle }}
          >
            #Home
          </Grid>
          <Grid
            item
            component={'a'}
            href={'#aboutSection'}
            sx={{
              ...navItemStyle,
            }}
          >
            #About
          </Grid>
          <Grid
            component={'a'}
            href={'#projectSection'}
            item
            sx={{
              ...navItemStyle,
            }}
          >
            #Project
          </Grid>
          <Grid
            component={'a'}
            href={'#contactSection'}
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
