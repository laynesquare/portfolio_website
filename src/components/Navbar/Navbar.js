import React from 'react';
import { Container, AppBar, Box, Toolbar } from '@mui/material';
import { default as officialLogo } from '../../assets/imgs/official_logo.svg';

const Navbar = () => {
  return (
    <Container maxWidth="md">
      <Box>
        <AppBar position="static" elevation={0}>
          <Toolbar sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                minHeight: '15rem',
                minWidth: '15rem',
                display: 'flex',
                justifyContent: 'center',
                mt: '2rem',
                mb: '2rem',
                pointerEvents: 'none',
              }}
            >
              <img className="logo_animation" src={officialLogo} alt="logo" />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default Navbar;
