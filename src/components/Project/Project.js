import { Typography, Box, Divider, Grid, Chip, Tooltip } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';
import FeatureList from './FeatureList';
import memory_preview from '../../assets/imgs/preview_share_your_memories.png';
import english_preview from '../../assets/imgs/preview_learn_english_with_dictionary.png';

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
      {/* <Box
        component={'div'}
        sx={{
          width: '100%',
          height: '5px',
          // backgroundColor: 'green',
          mb: '2rem',
          boxShadow: 'inset 1px 1px 2px #898989,  inset -1px -1px 2px #f7f4f4',
          borderRadius: '0.5rem',
        }}
      ></Box> */}
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
        <Grid item xs={12}>
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
              // boxShadow:
              //   'inset 1px 1px 2px #898989,  inset -1px -1px 2px #f7f4f4',

              // '&:hover': {
              //   '&:before': {
              //     transform: 'translate(0%, 0%)',
              //   },
              // },

              // '&:before': {
              //   content: '""',
              //   width: '100%',
              //   height: '100%',
              //   background: mainTheme.palette.primary.light,
              //   transform: 'translate(2%, 2.5%)',
              //   borderRadius: '1rem',
              //   position: 'absolute',
              //   zIndex: '-1',
              //   transition: 'all .5s ease-in-out',
              // },
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

                // '&:hover': {
                //   transform: 'translate(2%,2%)',
                // },
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
            >
              <Box
                component={'a'}
                href="http://www.shareyourmemories.com"
                sx={{
                  position: 'relative',
                  p: '0.5rem 1rem',
                  background: mainTheme.palette.primary.main,
                  color: mainTheme.palette.background.default,
                  borderRadius: '1rem',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  mr: '1rem',
                  boxShadow: ' 6px 6px 10px #898989,   -6px -6px 10px #edeaea',

                  '&:hover': {
                    background: mainTheme.palette.primary.dark,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                DEMO
              </Box>
            </Tooltip>

            <Box
              sx={{
                background: mainTheme.palette.primary.main,

                p: '0.5rem 1rem',
                color: mainTheme.palette.background.default,
                borderRadius: '1rem',

                cursor: 'pointer',
                transition: 'all .2s ease-in-out',
                boxShadow: ' 6px 6px 10px #898989,   -6px -6px 10px #edeaea',

                '&:hover': {
                  background: mainTheme.palette.primary.dark,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              CODE
            </Box>
          </Grid>

          <FeatureList whichProject={`Mem`} />
        </Grid>

        <Grid item xs={12}>
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

              // '&:hover': {
              //   '&:before': {
              //     transform: 'translate(0%, 0%)',
              //   },
              // },

              // '&:before': {
              //   content: '""',
              //   width: '100%',
              //   height: '100%',
              //   background: mainTheme.palette.primary.light,
              //   transform: 'translate(2%, 2.5%)',
              //   borderRadius: '1rem',
              //   position: 'absolute',
              //   zIndex: '-1',
              //   transition: 'all .5s ease-in-out',
              // },
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

                // '&:hover': {
                //   transform: 'translate(2%,2%)',
                // },
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
              sx={{
                p: '0.5rem 1rem',
                background: mainTheme.palette.primary.main,
                color: mainTheme.palette.background.default,
                borderRadius: '1rem',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                mr: '1rem',
                fontSize: '16px',
                boxShadow: ' 6px 6px 10px #898989,   -6px -6px 10px #edeaea',

                '&:hover': {
                  background: mainTheme.palette.primary.dark,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              DEMO
            </Box>

            <Box
              sx={{
                background: mainTheme.palette.primary.main,

                p: '0.5rem 1rem',
                color: mainTheme.palette.background.default,
                borderRadius: '1rem',
                cursor: 'pointer',
                transition: 'all .2s ease-in-out',
                mr: '1rem',
                boxShadow: ' 6px 6px 10px #898989,   -6px -6px 10px #edeaea',

                '&:hover': {
                  background: mainTheme.palette.primary.dark,
                  transform: 'translateY(-2px)',
                },
              }}
            >
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
