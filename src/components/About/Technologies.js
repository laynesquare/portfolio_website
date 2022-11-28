import { Typography, Box, Grid } from '@mui/material';
import { default as javascriptLogo } from '../../assets/imgs/JavaScript_logo.svg';
import { default as htmlLogo } from '../../assets/imgs/HTML5_logo.svg';
import { default as cssLogo } from '../../assets/imgs/CSS3_logo.svg';

import { default as reactRoutertLogo } from '../../assets/imgs/react-router-logo.svg';
import { default as materialUILogo } from '../../assets/imgs/material-ui-logo.svg';
import { default as reactLogo } from '../../assets/imgs/React-icon.svg';
import { default as reduxLogo } from '../../assets/imgs/redux-logo.svg';

import { default as mongooseLogo } from '../../assets/imgs/mongoose_logo.png';
import { default as expressLogo } from '../../assets/imgs/expressjs-icon.svg';
import { default as mongoDBLogo } from '../../assets/imgs/mongodb-icon.svg';
import { default as nodeJSLogo } from '../../assets/imgs/nodejs-icon.svg';

import { default as webpackLogo } from '../../assets/imgs/webpack-icon.svg';
import { default as netlifyLogo } from '../../assets/imgs/netlify-icon.svg';
import { default as herokuLogo } from '../../assets/imgs/heroku-icon.svg';
import { default as gitLogo } from '../../assets/imgs/Git_icon.svg';

import { default as illustratorLogo } from '../../assets/imgs/Adobe_Illustrator_CC_icon.svg';
import { default as photoshopLogo } from '../../assets/imgs/Adobe_Photoshop_CC_icon.svg';

const Technologies = () => {
  return (
    <Box>
      <Grid container sx={{ ...techStyle.outerBox }}>
        {techIcons.map((tech, index) => (
          <Grid key={index} item sx={{ ...techStyle.perIconBox }}>
            <Box
              component={'img'}
              src={tech.logo}
              sx={{ mb: '1rem', pointerEvents: 'none' }}
            ></Box>
            <Typography textAlign={'center'} sx={{ ...techStyle.techName }}>
              {tech.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const shadowGlobal = {
  boxInset: 'inset 4px 4px 9px #898989,  inset -4px -4px 9px #f7f4f4',
  imgBox: '6px 6px 10px #898989, -6px -6px 10px #fcfcfc',
  text: '1px 1px 2px #898989, -1px -1px 2px #f7f4f4',
  box: '3px 3px 5px #898989,   -3px -3px 5px #edeaea',
};

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

const techStyle = {
  outerBox: {
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    display: 'flex',
    mt: { xs: '2rem', sm: '0' },
  },

  perIconBox: {
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '1.5rem',
    transition: 'all 0.3s ease-in-out',
    boxShadow: shadowGlobal.box,
    minWidth: { xs: '80px', sm: '100px' },
    maxWidth: { xs: '120px', sm: '150px' },
    display: 'flex',
    m: { xs: '0.6rem', sm: '1rem' },
    p: '1rem',
    '&:hover': { boxShadow: shadowGlobal.boxInset },
  },

  techName: {
    textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
    fontSize: { xs: '0.8rem', sm: '1rem' },
  },
};

export default Technologies;
