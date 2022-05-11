import { Container, Typography, Box, Divider, Grid, Chip } from '@mui/material';

const Project = () => {
  return (
    <Box sx={{ m: 'auto auto', position: 'relative', width: '80%' }}>
      <Divider variant="middle">
        <Typography variant="h4" textAlign="center" sx={{}}>
          <Chip label="Project"></Chip>
        </Typography>
      </Divider>

      <Grid container justifyContent="center" spacing={3} padding={2}>
        <Grid item xs={6}>
          <Typography variant="h3">01.</Typography>
          <Typography variant="h5">Share your memories</Typography>

          <Typography variant="h7" sx={{}}>
            Overview
          </Typography>

          <Typography
            sx={{
              textAlign: 'justify',
              fontSize: '1rem',
              fontFamily: 'Montserrat',
            }}
          >
            Create a platform where people could share treasured memories in
            their lives with anyone out there throughout the globe.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{ width: '100%', height: '100%', backgroundColor: 'red' }}
          ></Box>
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
