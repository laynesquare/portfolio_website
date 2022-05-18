import React from 'react';
import { default as javascriptLogo } from '../../assets/imgs/JavaScript_logo.svg';
import { default as htmlLogo } from '../../assets/imgs/HTML5_logo.svg';
import { default as cssLogo } from '../../assets/imgs/CSS3_logo.svg';

import { default as reactLogo } from '../../assets/imgs/React-icon.svg';
import { default as reactRoutertLogo } from '../../assets/imgs/react-router-logo.svg';
import { default as reduxLogo } from '../../assets/imgs/redux-logo.svg';
import { default as materialUILogo } from '../../assets/imgs/material-ui-logo.svg';

import { default as nodeJSLogo } from '../../assets/imgs/nodejs-icon.svg';
import { default as expressLogo } from '../../assets/imgs/expressjs-icon.svg';
import { default as mongooseLogo } from '../../assets/imgs/mongoose_logo.png';
import { default as mongoDBLogo } from '../../assets/imgs/mongodb-icon.svg';

import { default as gitLogo } from '../../assets/imgs/Git_icon.svg';
import { default as webpackLogo } from '../../assets/imgs/webpack-icon.svg';
import { default as netlifyLogo } from '../../assets/imgs/netlify-icon.svg';
import { default as herokuLogo } from '../../assets/imgs/heroku-icon.svg';

import { default as photoshopLogo } from '../../assets/imgs/Adobe_Photoshop_CC_icon.svg';

import { default as illustratorLogo } from '../../assets/imgs/Adobe_Illustrator_CC_icon.svg';

import { Typography, Box, Grid } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';

const techIcons = [
  { logo: javascriptLogo, name: 'JavaScript' },
  { logo: htmlLogo, name: 'HTML' },
  { logo: cssLogo, name: 'CSS' },

  { logo: reactLogo, name: 'React' },
  { logo: reactRoutertLogo, name: 'React Router' },
  { logo: reduxLogo, name: 'React Redux' },
  { logo: materialUILogo, name: 'Material UI' },

  { logo: nodeJSLogo, name: 'Node.js' },
  { logo: expressLogo, name: 'Express' },
  { logo: mongoDBLogo, name: 'MongoDB' },
  { logo: mongooseLogo, name: 'Mongoose' },

  { logo: gitLogo, name: 'Git' },
  { logo: webpackLogo, name: 'Webpack' },
  { logo: netlifyLogo, name: 'Netlify' },
  { logo: herokuLogo, name: 'Heroku' },

  { logo: photoshopLogo, name: 'Photoshop' },
  { logo: illustratorLogo, name: 'Illustrator' },
];

const Technologies = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
          //   pointerEvents: 'none',
          //   background: 'red',
        }}
      >
        {techIcons.map((tech, index) => (
          <Grid
            item
            sx={{
              boxShadow: ' 3px 3px 5px #898989,   -3px -3px 5px #edeaea',
              p: '1rem',
              borderRadius: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',

              minWidth: '100px',
              maxWidth: '150px',
              m: '1rem',
              transition: 'all 0.3s ease-in-out',

              // [`@media (max-width: ${mainTheme.breakpoints.md}px)`]: {
              '&:hover': {
                boxShadow:
                  'inset 4px 4px 9px #898989,  inset -4px -4px 9px #f7f4f4',
              },
            }}
          >
            <Box
              component={'img'}
              src={tech.logo}
              sx={{
                // borderRadius: '30%',
                mb: '1rem',
                pointerEvents: 'none',
              }}
            ></Box>
            <Typography
              textAlign={'center'}
              sx={{
                textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
                // color: mainTheme.palette.background.default,
                justifySelf: 'flex-end',
              }}
            >
              {tech.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Technologies;
