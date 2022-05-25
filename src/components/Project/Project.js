import { Typography, Box, Grid, Tooltip, useMediaQuery } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';
import FeatureList from './FeatureList';
import memory_preview from '../../assets/imgs/preview_share_your_memories.png';
import english_preview from '../../assets/imgs/preview_learn_english_with_dictionary.png';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

const demoCodeBtnStyle = {
  position: 'relative',
  p: '0.5rem 0.7rem',

  color: mainTheme.palette.primary.main,
  borderRadius: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all .2s ease-in-out',
  mr: '1rem',
  boxShadow: ' 4px 4px 8px #898989, -4px -4px 8px #edeaea',
  display: 'flex',
  justifyContent: 'center',

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
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      id="projectSection"
      sx={{
        m: '0rem auto 0rem auto',

        p: '4rem 0rem 2rem 0rem',
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        // bgcolor: 'blue',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant={isMobile ? 'h5' : 'h3'}
          textAlign={'center'}
          sx={{
            textShadow: ' 1px 1px 2px #898989,   -1px -1px 2px #f7f4f4',
            color: mainTheme.palette.background.default,

            p: '2rem',

            borderRadius: '50%',
            display: 'inline-block',
            borderLeft: '20px solid #CDCDCD',
            borderRight: '20px solid #CDCDCD',

            boxShadow:
              ' 5px 5px 9px #898989,  -5px -5px 9px #edeaea, inset 5px 5px 9px #898989, inset -5px -5px 9px #edeaea',

            // mb: '2rem',
          }}
        >
          #Project
        </Typography>
      </Box>

      <Grid container justifyContent="center" spacing={5} padding={2}>
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
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: 'auto',
              mb: '2rem',
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
                {/* <Typography> */}
                <RemoveRedEyeIcon sx={{ mr: '0.5rem' }} />
                DEMO
                {/* </Typography> */}
              </Box>
            </Tooltip>
            <Box sx={{ ...demoCodeBtnStyle, mr: '0rem' }}>
              <CodeRoundedIcon sx={{ mr: '0.5rem' }} />
              CODE
            </Box>
          </Grid>
          <Box
            sx={{
              display: 'block',
              width: '100%',
              // bgcolor: 'red',
              textAlign: 'center',
              fontSize: '0.8rem',
              mb: '2rem',
              color: '#000033',
            }}
          >
            {'// '}Slow loading might occur due to Heroku's cloud services
            deploying the server to the free dyno.
          </Box>

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
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: 'auto',
              mb: '2rem',
            }}
          >
            <Box
              component={'a'}
              href="http://www.shareyourmemories.com"
              sx={demoCodeBtnStyle}
            >
              <RemoveRedEyeIcon sx={{ mr: '0.5rem' }} />
              DEMO
            </Box>

            <Box sx={{ ...demoCodeBtnStyle, mr: '0rem' }}>
              <CodeRoundedIcon sx={{ mr: '0.5rem' }} />
              CODE
            </Box>
          </Grid>

          <FeatureList whichProject="Eng" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
