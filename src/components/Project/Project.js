import { Typography, Box, Grid, useMediaQuery } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import english_preview from '../../assets/imgs/preview_learn_english_with_dictionary.png';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import memory_preview from '../../assets/imgs/preview_share_your_memories.png';
import FeatureList from './FeatureList/FeatureList';
import separator from '../../assets/imgs/aboutTop3.svg';

const Project = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <Box sx={{ ...projectStyle.separator }}></Box>

      <Box id="projectSection" sx={{ ...projectStyle.outerBox }}>
        <Box sx={{ ...projectStyle.sectionTitle.inboxDisplay }}>
          <Typography
            variant={isMobile ? 'h5' : 'h3'}
            textAlign={'center'}
            sx={{ ...projectStyle.sectionTitle.shapeAndFont }}
          >
            #Project
          </Typography>
        </Box>

        <Grid container justifyContent="center" spacing={5} padding={2}>
          <Grid item xs={12} sx={{ textShadow: shadowGlobal.text }}>
            <Typography variant="h3">01.</Typography>
            <Typography variant="h4" sx={{ mb: '3rem' }}>
              Share your memories | Full stack
            </Typography>

            <Box sx={{ ...projectStyle.preview.outerBox }}>
              <Box
                className="preview"
                component={'img'}
                src={memory_preview}
                sx={{ ...projectStyle.preview.img }}
              ></Box>
            </Box>

            <Grid item sx={{ ...projectStyle.btnContainer }}>
              <CallToAction />
            </Grid>

            <Box sx={{ ...projectStyle.slowLoadingExplanation }}>
              {'// '}Slow loading might occur due to Heroku's cloud services
              deploying the server to the free dyno.
            </Box>

            <FeatureList whichProject={`Mem`} />
          </Grid>

          {/* --------------------------------------------------------- */}
          {/* --------------------------------------------------------- */}
          {/* --------------------------------------------------------- */}

          <Grid item xs={12} sx={{ textShadow: shadowGlobal.text }}>
            <Typography variant="h3">02.</Typography>
            <Typography variant="h4" sx={{ mb: '3rem' }}>
              Learn English with Dictionary | Frontend
            </Typography>

            <Box sx={{ ...projectStyle.preview.outerBox }}>
              <Box
                className="preview"
                component={'img'}
                src={english_preview}
                sx={{ ...projectStyle.preview.img }}
              ></Box>
            </Box>

            <Grid item sx={{ ...projectStyle.btnContainer }}>
              <CallToAction />
            </Grid>

            <FeatureList whichProject="Eng" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const CallToAction = ({ demoLink, codeLink }) => (
  <>
    <Box component={'a'} href={demoLink} sx={demoCodeBtnStyle}>
      <RemoveRedEyeIcon sx={{ mr: '0.5rem' }} />
      DEMO
    </Box>
    <Box
      component={'a'}
      href={codeLink}
      sx={{ ...demoCodeBtnStyle, mr: '0rem' }}
    >
      <CodeRoundedIcon sx={{ mr: '0.5rem' }} />
      CODE
    </Box>
  </>
);

const shadowGlobal = {
  boxInset: 'inset 2px 2px 4px #898989, inset -2px -2px 4px #edeaea',
  imgBox: '6px 6px 10px #898989, -6px -6px 10px #fcfcfc',
  text: '1px 1px 2px #898989, -1px -1px 2px #f7f4f4',
  box: '2px 2px 4px #898989, -2px -2px 4px #edeaea',
  titleBox:
    '5px 5px 9px #898989,  -5px -5px 9px #edeaea, inset 5px 5px 9px #898989, inset -5px -5px 9px #edeaea',
};

const demoCodeBtnStyle = {
  justifyContent: 'center',
  textDecoration: 'none',
  borderRadius: '1rem',
  transition: 'all .2s ease-in-out',
  boxShadow: ' 4px 4px 8px #898989, -4px -4px 8px #edeaea',
  position: 'relative',
  display: 'flex',
  cursor: 'pointer',
  color: mainTheme.palette.primary.main,
  mr: '1rem',
  p: '0.5rem 0.7rem',

  '&:active': {
    boxShadow: shadowGlobal.boxInset,
  },
  '&:hover': {
    boxShadow: shadowGlobal.box,

    '&:active': {
      boxShadow: shadowGlobal.boxInset,
    },
  },
};

const projectStyle = {
  separator: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('${separator}')`,
    backgroundSize: 'cover',
    aspectRatio: '3/1',
    transform: 'rotate(5deg) scale(1.1)',
    width: '100%',
  },

  outerBox: {
    position: 'relative',
    maxWidth: '1200px',
    width: '100%',
    p: '4rem 0rem 2rem 0rem',
    m: '0rem auto 0rem auto',
  },

  sectionTitle: {
    inboxDisplay: {
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },

    shapeAndFont: {
      borderRadius: '50%',
      borderRight: '20px solid #CDCDCD',
      textShadow: shadowGlobal.text,
      borderLeft: '20px solid #CDCDCD',
      boxShadow: shadowGlobal.titleBox,
      display: 'inline-block',
      color: mainTheme.palette.background.default,
      mb: '2rem',
      p: '2rem',
    },
  },

  preview: {
    outerBox: {
      borderRadius: '1rem',
      position: 'relative',
      maxWidth: '700px',
      display: 'block',
      margin: 'auto',
      mb: '3rem',
    },

    img: {
      borderRadius: '1rem',
      transition: 'all .2s ease-in-out',
      boxShadow: shadowGlobal.imgBox,
      display: 'block',
      border: ' 5px solid #CDCDCD',
      width: '100%',
    },
  },

  btnContainer: {
    justifyContent: 'center',
    display: 'flex',
    margin: 'auto',
    mb: '2rem',
  },

  slowLoadingExplanation: {
    textAlign: 'center',
    fontSize: '0.8rem',
    display: 'block',
    color: '#000033',
    width: '100%',
    mb: '2rem',
  },
};

export default Project;
