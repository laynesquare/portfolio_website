import { Typography, Box, Grid, Tooltip } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';
import FeatureList from './FeatureList';
import memory_preview from '../../assets/imgs/preview_share_your_memories.png';
import english_preview from '../../assets/imgs/preview_learn_english_with_dictionary.png';

const demoCodeBtnStyle = {
  position: 'relative',
  p: '0.5rem 1rem',

  color: mainTheme.palette.primary.main,
  borderRadius: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all .2s ease-in-out',
  mr: '1rem',
  boxShadow: ' 4px 4px 8px #898989, -4px -4px 8px #edeaea',

  '&:active': {
    boxShadow: 'inset 4px 4px 8px #898989, inset -4px -4px 8px #edeaea',
  },

  '&:hover': {
    boxShadow: '2px 2px 4px #898989, -2px -2px 4px #edeaea',
    '&:active': {
      boxShadow: 'inset 2px 2px 4px #898989, inset -2px -2px 4px #edeaea',
    },
  },
};

const Project = () => {
  return (
    <Box
      sx={{
        m: 'auto auto',
        position: 'relative',
        width: '75%',
        maxWidth: '1536px',
      }}
    >
      <Typography
        variant="h2"
        textAlign={'center'}
        sx={{
          textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
          color: mainTheme.palette.background.default,
        }}
      >
        ＃Project
      </Typography>

      <Grid
        className="project_title"
        container
        justifyContent="center"
        spacing={5}
        padding={3}
      >
        <Grid
          item
          xs={12}
          sx={{
            textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
          }}
        >
          <Typography variant="h3">01.</Typography>
          <Typography variant="h4" sx={{ mb: '3rem' }}>
            Share your memories | Full stack
          </Typography>
          <Box
            sx={{
              display: 'block',
              position: 'relative',
              margin: 'auto',
              maxWidth: '700px',
              borderRadius: '1rem',
              mb: '3rem',
            }}
          >
            <Box
              className="preview"
              component={'img'}
              src={memory_preview}
              sx={{
                display: 'block',
                width: '100%',
                borderRadius: '1rem',
                boxShadow: ' 6px 6px 10px #898989,   -6px -6px 10px #fcfcfc',
                border: ' 5px solid #CDCDCD',

                transition: 'all .2s ease-in-out',
              }}
            ></Box>
          </Box>

          <Grid
            item
            xs={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: 'auto',
              mb: '3rem',
            }}
          >
            <Tooltip
              title="Lazy login is now offered, if you are meant to just explore a little."
              placement="left"
              enterDelay={0}
            >
              <Box
                component={'a'}
                href="http://www.shareyourmemories.com"
                sx={demoCodeBtnStyle}
              >
                DEMO
              </Box>
            </Tooltip>

            <Box sx={demoCodeBtnStyle}>CODE</Box>
          </Grid>

          <FeatureList whichProject={`Mem`} />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
          }}
        >
          <Typography variant="h3">02.</Typography>
          <Typography variant="h4" sx={{ mb: '3rem' }}>
            Learn English with Dictionary | Frontend
          </Typography>
          <Box
            sx={{
              display: 'block',
              position: 'relative',
              margin: 'auto',
              maxWidth: '700px',
              borderRadius: '1rem',
              mb: '3rem',
            }}
          >
            <Box
              className="preview"
              component={'img'}
              src={english_preview}
              sx={{
                display: 'block',
                width: '100%',
                borderRadius: '1rem',
                boxShadow: ' 6px 6px 10px #898989,   -6px -6px 10px #fcfcfc',
                border: ' 5px solid #CDCDCD',
                transition: 'all .2s ease-in-out',
              }}
            ></Box>
          </Box>

          <Grid
            item
            xs={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: 'auto',
              mb: '3rem',
            }}
          >
            <Box
              component={'a'}
              href="http://www.shareyourmemories.com"
              sx={demoCodeBtnStyle}
            >
              DEMO
            </Box>

            <Box sx={demoCodeBtnStyle}>CODE</Box>
          </Grid>

          <FeatureList whichProject="Eng" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
