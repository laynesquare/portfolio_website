import { Box, Typography } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';

const About = () => {
  return (
    <Box
      sx={{
        maxidth: '75%',
        m: 'auto auto',

        maxWidth: '1536px',
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h2"
        textAlign={'center'}
        sx={{
          textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
          color: mainTheme.palette.background.default,
          mb: '2rem',
        }}
      >
        ＃About
      </Typography>
      <Box sx={{ maxWidth: '80%', display: 'block', m: 'auto' }}>
        <Typography sx={{ mb: '1rem' }}>
          Hello, my name is Layne Chen, and I am a self-taught web developer.
        </Typography>
        <Typography sx={{ mb: '1rem' }}>
          As a technical writer for a company that provides telecommunication
          products, the writing for both hardware and software documentation has
          pathed the ground for me to become aware of the reader experience,
          which revolves around legibility, the layout of topology diagram, and
          the arrangement of texts.
        </Typography>
        <Typography sx={{ mb: '1rem' }}>
          Besides, the maintenance of the company's website requires HTML / CSS
          languages to present both marketing and technical materials. These
          experiences propelled me to have a preliminary grasp of the frontend
          web design and further extensive exploration not only on how to build
          a full-fledged web application from scratch but also what a decent
          website entails. Hence, I start my self-taught journey.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
