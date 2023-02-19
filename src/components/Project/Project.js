import { Typography, Box, Grid, useMediaQuery } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';
import { forwardRef } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import english_preview from '../../assets/imgs/learnEnglishPreview.jpg';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import memory_preview from '../../assets/imgs/shareMemoriesPreview.jpg';
import FeatureList from './FeatureList/FeatureList';
import separator from '../../assets/imgs/aboutTop3.svg';
import MuiAlert from '@mui/material/Alert';

const Project = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <Box sx={style.separator}></Box>

      <Box id="projectSection" sx={style.outerBox}>
        <Box sx={style.sectionTitle.inboxDisplay}>
          <Typography
            variant={isMobile ? 'h5' : 'h3'}
            sx={style.sectionTitle.shapeAndFont}
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

            <Box sx={style.preview.outerBox}>
              <Box
                className="preview"
                component={'img'}
                src={memory_preview}
                sx={style.preview.img}
              ></Box>
            </Box>

            <Grid item sx={style.btnContainer}>
              <CallToAction demoLink={link.mem.demo} codeLink={link.mem.code} />
            </Grid>

            <Alert severity="warning" sx={style.slowLoadingExplanation}>
              Slow loading will occur because the back-end server is deployed on
              a free hosting service.
            </Alert>

            <FeatureList whichProject={`Mem`} />
          </Grid>

          <Grid item xs={12} sx={{ textShadow: shadowGlobal.text }}>
            <Typography variant="h3">02.</Typography>
            <Typography variant="h4" sx={{ mb: '3rem' }}>
              Learn English with Dictionary | Frontend
            </Typography>

            <Box sx={style.preview.outerBox}>
              <Box
                className="preview"
                component={'img'}
                src={english_preview}
                sx={style.preview.img}
              ></Box>
            </Box>

            <Grid item sx={style.btnContainer}>
              <CallToAction demoLink={link.eng.demo} codeLink={link.eng.code} />
            </Grid>

            <Alert severity="warning" sx={style.slowLoadingExplanation}>
              Slow loading will occur because the back-end server is deployed on
              a free hosting service.
            </Alert>

            <FeatureList whichProject="Eng" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={15} ref={ref} variant="filled" {...props} />;
});

const CallToAction = ({ demoLink, codeLink }) => (
  <>
    <Box
      component={'a'}
      href={demoLink}
      target={'_blank'}
      sx={demoCodeBtnStyle}
    >
      <RemoveRedEyeIcon sx={{ mr: '0.5rem' }} />
      DEMO
    </Box>
    <Box
      component={'a'}
      href={codeLink}
      target={'_blank'}
      sx={demoCodeBtnStyle}
    >
      <CodeRoundedIcon sx={{ mr: '0.5rem' }} />
      CODE
    </Box>
  </>
);

const link = {
  mem: {
    demo: `https://laynesquare.github.io/share_your_memories/`,
    code: `https://github.com/laynesquare/share_your_memories`,
  },
  eng: {
    demo: `https://laynesquare.github.io/learn_english_with_dictionary/`,
    code: `https://github.com/laynesquare/learn_english_with_dictionary`,
  },
};

const shadowGlobal = {
  boxInset: 'inset 2px 2px 4px #898989, inset -2px -2px 4px #edeaea',
  imgBox: '6px 6px 10px #898989, -6px -6px 10px #fcfcfc',
  text: '1px 1px 2px #898989, -1px -1px 2px #f7f4f4',
  box: '2px 2px 4px #898989, -2px -2px 4px #edeaea',
  titleBox:
    '5px 5px 9px #898989,  -5px -5px 9px #edeaea, inset 5px 5px 9px #898989, inset -5px -5px 9px #edeaea',
};

const style = {
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
    maxWidth: '1200px',
    width: '100%',
    p: '4rem 0rem 2rem 0rem',
    m: '0rem auto 0rem auto',
  },

  sectionTitle: {
    inboxDisplay: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
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
    textShadow: 'none',
    maxWidth: '900px',
    m: '2rem auto',
  },
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

export default Project;
