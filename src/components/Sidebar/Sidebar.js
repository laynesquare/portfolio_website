import React from 'react';
import { Grid, Button, Box } from '@mui/material';
import { default as symbol } from '../../assets/imgs/decor_symbol.svg';

const Sidebar = () => {
  return (
    <>
      <div>
        {/* <Box
          sx={{
            minHeight: '2rem',
            minWidth: '2rem',
            width: '3rem',
            pointerEvents: 'none',
            top: '10px',
            position: 'fixed',
            zIndex: '0',
          }}
        >
          <img src={symbol} alt="decor_symbol"></img>
        </Box> */}
        <Grid
          container
          justifyContent="center"
          sx={{
            textOrientation: 'mixed',
            writingMode: 'vertical-lr',
            display: 'flex',
            flexDirection: 'row',
            width: '3rem',
            alignItems: 'center',
            height: '100vh',
            position: 'fixed',
            zIndex: '10',
          }}
          backgroundColor="primary"
        >
          <Box
            sx={{
              width: '5px',
              height: '25%',
              bgcolor: 'red',
              boxShadow:
                'inset 2px 2px 4px #898989, inset -2px -2px px #edeaea',
              borderRadius: '1rem',
            }}
          ></Box>

          <Grid item>About</Grid>
          <Grid item sx={{ mt: '1rem' }}>
            Project
          </Grid>
          <Grid item sx={{ mt: '1rem' }}>
            Resume
          </Grid>
          <Grid item sx={{ mt: '1rem' }}>
            Contact
          </Grid>
          <Box
            sx={{
              width: '5px',
              height: '25%',
              // bgcolor: 'red',
              boxShadow:
                'inset 4px 4px 8px #898989, inset -4px -4px 8px #edeaea',
              borderRadius: '1rem',
            }}
          ></Box>
        </Grid>

        <Box
          sx={{
            minHeight: '2rem',
            minWidth: '2rem',
            width: '3rem',
            pointerEvents: 'none',
            alignSelf: 'flex-end',
            bottom: '5px',
            position: 'fixed',
            zIndex: '0',
          }}
        >
          <img src={symbol} alt="decor_symbol"></img>
        </Box>
      </div>
      <div>
        <Box
          sx={{
            minHeight: '2rem',
            minWidth: '2rem',
            width: '3rem',
            pointerEvents: 'none',
            top: '10px',
            position: 'fixed',
            zIndex: '0',
            right: '0',
          }}
        >
          <img src={symbol} alt="decor_symbol"></img>
        </Box>
        <Grid
          container
          justifyContent="center"
          sx={{
            textOrientation: 'mixed',
            writingMode: 'vertical-lr',
            display: 'flex',
            flexDirection: 'row',
            width: '3rem',
            alignItems: 'center',
            height: '100vh',
            position: 'fixed',
            zIndex: '10',
            right: '0',
          }}
          backgroundColor="primary"
        >
          <Grid item>About</Grid>
          <Grid item sx={{ mt: '1rem' }}>
            Project
          </Grid>
          <Grid item sx={{ mt: '1rem' }}>
            Resume
          </Grid>
          <Grid item sx={{ mt: '1rem' }}>
            Contact
          </Grid>
        </Grid>
        <Box
          sx={{
            minHeight: '2rem',
            minWidth: '2rem',
            width: '3rem',
            pointerEvents: 'none',
            alignSelf: 'flex-end',
            bottom: '5px',
            position: 'fixed',
            zIndex: '0',
            right: '0',
          }}
        >
          <img src={symbol} alt="decor_symbol"></img>
        </Box>
      </div>
    </>
  );
};

export default Sidebar;
