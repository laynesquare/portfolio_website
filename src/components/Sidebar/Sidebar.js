import React from 'react';
import { Grid, Button, Box } from '@mui/material';
import { default as symbol } from '../../assets/imgs/decor_symbol.svg';
import { default as gitIcon } from '../../assets/imgs/github_icon.svg';
import { mainTheme } from '../../themes/mainTheme';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
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
            width: '4rem',
            alignItems: 'center',
            height: '100vh',
            position: 'fixed',
            zIndex: '10',

            flexWrap: 'nowrap',
          }}
          backgroundColor="primary"
        >
          <Box
            sx={{
              width: '7px',
              height: '25%',

              boxShadow:
                'inset 2px 2px 4px #898989, inset -2px -2px 4px #edeaea',
              borderRadius: '49% 51% 51% 49% / 81% 81% 19% 19% ',
              m: '1rem',
            }}
          ></Box>

          <Grid
            item
            sx={{
              textAlign: 'center',
              fontSize: '1rem',
              backgroundColor: '#7C7C7C',
              color: 'transparent',
              textShadow: '2px 2px 3px rgba(255,255,255,0.5)',
              backgroundClip: 'text',
            }}
          >
            #Home
          </Grid>
          <Grid
            item
            sx={{
              textAlign: 'center',
              fontSize: '1rem',
              backgroundColor: '#7C7C7C',
              color: 'transparent',
              textShadow: '2px 2px 3px rgba(255,255,255,0.5)',
              backgroundClip: 'text',
              mt: '1rem',
            }}
          >
            #About
          </Grid>
          <Grid
            item
            sx={{
              mt: '1rem',
              textAlign: 'center',
              fontSize: '1rem',
              backgroundColor: '#7C7C7C',
              color: 'transparent',
              textShadow: '2px 2px 3px rgba(255,255,255,0.5)',
              backgroundClip: 'text',
            }}
          >
            #Project
          </Grid>
          <Grid
            item
            sx={{
              mt: '1rem',
              textAlign: 'center',
              fontSize: '1rem',
              backgroundColor: '#7C7C7C',
              color: 'transparent',
              textShadow: '2px 2px 3px rgba(255,255,255,0.5)',
              backgroundClip: 'text',
            }}
          >
            #Contact
          </Grid>
          <Grid
            item
            sx={{
              mt: '1rem',
              textAlign: 'center',
              fontSize: '1rem',
              backgroundColor: '#7C7C7C',
              color: 'transparent',
              textShadow: '2px 2px 3px rgba(255,255,255,0.5)',
              backgroundClip: 'text',
            }}
          >
            #Resume
          </Grid>
          <Box
            sx={{
              width: '8px',
              height: '30%',

              boxShadow:
                'inset 2px 2px 4px #898989, inset -2px -2px 4px #edeaea',

              borderRadius: '49% 51% 51% 49% / 23% 23% 77% 77%  ',
              m: '1rem',
            }}
          ></Box>
        </Grid>
      </div>
      <div>
        <Grid
          container
          justifyContent="center"
          sx={{
            textOrientation: 'mixed',
            writingMode: 'vertical-lr',
            display: 'flex',
            flexDirection: 'row',
            width: '4rem',
            alignItems: 'center',
            height: '100vh',
            position: 'fixed',
            zIndex: '10',
            right: '0px',
            flexWrap: 'nowrap',
          }}
          backgroundColor="primary"
        >
          <Box
            sx={{
              width: '7px',
              height: '50%',

              boxShadow:
                'inset 2px 2px 4px #898989, inset -2px -2px 4px #edeaea',
              borderRadius: '49% 51% 51% 49% / 81% 81% 19% 19% ',
              m: '1rem',
            }}
          ></Box>
          <Grid
            item
            component={'img'}
            src={gitIcon}
            sx={{
              border: '2px solid #CDCDCD',
              borderRadius: '50%',
              boxShadow: ' 2px 2px 4px #898989,  -2px -2px 4px #edeaea',
            }}
          ></Grid>
          <Grid
            item
            sx={{
              mt: '1rem',
              color: mainTheme.palette.background.default,

              textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
            }}
          >
            laynechensquare@gmail.com
          </Grid>
          <Box
            sx={{
              width: '8px',
              height: '50%',

              boxShadow:
                'inset 2px 2px 4px #898989, inset -2px -2px 4px #edeaea',

              borderRadius: '49% 51% 51% 49% / 23% 23% 77% 77%  ',
              m: '1rem',
            }}
          ></Box>
        </Grid>
      </div>
    </>
  );
};

export default Sidebar;
