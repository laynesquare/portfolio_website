import { AppBar, Box, Typography, Grid, useMediaQuery } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import { mainTheme } from '../../themes/mainTheme';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [navOnScroll, preScrollpos] = [useRef([]), useRef(0)];
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleScroll = () => {
    const scrollDown = preScrollpos.current > window.scrollY;
    const navHeight = `${navOnScroll.current.offsetHeight * -1.3}px`;
    navOnScroll.current.style.top = scrollDown ? 0 : navHeight;
    preScrollpos.current = window.scrollY;
    setOpenDropdown(false);
  };

  const handleDropdown = (e) => {
    const [cursorY, innerHeight] = [e.clientY, window.innerHeight];
    if (cursorY > innerHeight / 2) setOpenDropdown(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleDropdown);
  }, []);

  if (isMobile)
    return (
      <>
        <Box sx={style.dropdownArea(openDropdown)}>
          <Box sx={style.dropdownItemCtn}>
            <Items isMobile={isMobile} />
          </Box>
        </Box>
        <AppBar sx={style.appbarMobile} ref={navOnScroll}>
          <Box
            sx={style.dropdownBtn(openDropdown)}
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <Typography sx={style.dropdownIcon}>≡</Typography>
          </Box>
        </AppBar>
      </>
    );

  return (
    <AppBar ref={navOnScroll} sx={style.appbar}>
      <Items isMobile={isMobile} />
    </AppBar>
  );
};

const Items = (isMobile) => (
  <>
    <Grid
      item
      component={'a'}
      href={'#homeSection'}
      sx={style.navItem(isMobile)}
    >
      #Home
    </Grid>
    <Grid
      item
      component={'a'}
      href={'#aboutSection'}
      sx={style.navItem(isMobile)}
    >
      #About
    </Grid>
    <Grid
      component={'a'}
      href={'#projectSection'}
      item
      sx={style.navItem(isMobile)}
    >
      #Project
    </Grid>
    <Grid
      component={'a'}
      href={'#contactSection'}
      item
      sx={style.navItem(isMobile)}
    >
      #Contact
    </Grid>
    <Grid item sx={style.navItem(isMobile)}>
      #Resume
    </Grid>
  </>
);

const style = {
  appbar: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    transition: 'all 0.5s ease-in-out',
    alignItems: 'center',
    boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.2)',
    position: 'fixed',
    bgcolor: mainTheme.palette.background.default,
    display: 'flex',
    zIndex: '2000',
    top: '0px',
  },

  appbarMobile: {
    // pending
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    transition: 'all 0.5s ease-in-out',
    boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.2)',
    fontSize: '0.1rem',
    position: 'fixed',
    flexWrap: 'nowrap',
    bgcolor: mainTheme.palette.background.default,
    display: 'flex',
    zIndex: '2100',
    top: '0px',
    p: '0.5rem',
  },

  dropdownBtn: (openDropdown) => ({
    justifyContent: 'center',
    borderRadius: '50%',
    background: 'linear-gradient(145deg, #dbdbdb, #b9b9b9)',
    textShadow: ' 1px 1px 2px #898989, -1px -1px 2px #f7f4f4',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    height: '30px',
    width: '30px',
    color: mainTheme.palette.background.default,
    boxShadow: openDropdown
      ? ' inset 2px 2px 4px #898989, inset -2px -2px 4px #edeaea'
      : ' 4px 4px 8px #898989, -4px -4px 8px #edeaea',
  }),

  dropdownIcon: {
    backgroundColor: '#7C7C7C',
    backgroundClip: 'text',
    textShadow: '2px 2px 3px rgba(255,255,255,0.5)',
    userSelect: 'none',
    textAlign: 'center',
    fontSize: '1.5rem',
    color: 'transparent',
  },

  dropdownArea: (openDropdown) => ({
    justifyContent: 'center',
    transition: 'all 0.3s ease-in-out',
    alignItems: 'flex-end',
    position: 'fixed',
    display: 'flex',
    zIndex: '2000',
    opacity: openDropdown ? '1' : '0',
    transform: openDropdown ? 'translateY(0)' : 'translateY(-100%)',
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2) ,rgba(0,0,0,0))',
  }),

  dropdownItemCtn: {
    position: 'relative',
    justifyContent: 'space-around',
    borderRadius: '3rem',
    boxShadow: 'inset 5px 5px 9px #898989, inset -5px -5px 9px #edeaea',
    flexWrap: 'wrap',
    bgcolor: mainTheme.palette.background.default,
    display: 'flex',
    border: '3px solid #CDCDCD',
    p: '0.5rem 1.5rem',
    m: '4rem 1rem 6rem 1rem',
  },

  navItem: (isMobile) => ({
    backgroundColor: '#7C7C7C',
    backgroundClip: 'text',
    textDecoration: 'none',
    textShadow: '2px 2px 3px rgba(255,255,255,0.5)',
    textAlign: 'center',
    color: 'transparent',
    p: isMobile && '0.5rem',
    ':hover': {
      textShadow: '0.5px 0.5px 1px #898989, -0.5px -0.5px 1px #f7f4f4',
      color: mainTheme.palette.background.default,
    },
  }),
};

export default Navbar;
