import { Typography, Box, Divider, Grid, Chip, Tooltip } from '@mui/material';
import { mainTheme } from '../../themes/mainTheme';
import FeatureList from './FeatureList';
import memory_preview from '../../assets/imgs/preview_share_your_memories.png';

const Project = () => {
  return (
    <Box
      sx={{
        m: 'auto auto',
        position: 'relative',
        width: '80%',
        maxWidth: '1536px',
      }}
    >
      <Divider variant="middle">
        <Typography variant="h4" textAlign="center" sx={{}}>
          <Chip label="Project"></Chip>
        </Typography>
      </Divider>

      <Grid container justifyContent="center" spacing={5} padding={3}>
        <Grid item xs={12}>
          <Typography variant="h3">01.</Typography>
          <Typography variant="h3" sx={{ mb: '3rem' }}>
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

              '&:hover': {
                '&:before': {
                  transform: 'translate(0%, 0%)',
                },
              },

              '&:before': {
                content: '""',
                width: '100%',
                height: '100%',
                background: mainTheme.palette.primary.light,
                transform: 'translate(2%, 2.5%)',
                borderRadius: '1rem',
                position: 'absolute',
                zIndex: '-1',
                transition: 'all .5s ease-in-out',
              },
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

                transition: 'all .2s ease-in-out',

                '&:hover': {
                  transform: 'translate(2%,2%)',
                },
              }}
            ></Box>
          </Box>

          <Grid
            item
            xs={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              // background:
              //   'radial-gradient(circle, rgba(188,37,103,1) 0%, rgba(101,47,141,1) 100%)',
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
                  p: '0.5rem 1rem',
                  background: '#652F8D',
                  color: mainTheme.palette.background.default,
                  borderRadius: '1rem 0 0 1rem',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                DEMO
              </Box>
            </Tooltip>

            <Box
              sx={{
                backgroundColor: '#bc2567',
                p: '0.5rem 1rem',
                color: mainTheme.palette.background.default,
                borderRadius: '0 1rem 1rem 0',
                cursor: 'pointer',
              }}
            >
              CODE
            </Box>
          </Grid>

          <FeatureList />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={3} padding={2}>
        <Grid item xs={6}>
          <Typography variant="h3">02.</Typography>
          <Typography variant="h5">Learn English With Dictionary</Typography>
          <Typography
            variant="h7"
            sx={{ fontFamily: 'Montserrat' }}
            color="textSecondary"
          >
            A full stack web application that allows users to create, edit, and
            delete the
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{ width: '80%', height: '80%', backgroundColor: 'green' }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
