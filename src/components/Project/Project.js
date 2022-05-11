import { Container, Typography, Box, Divider, Grid, Chip } from '@mui/material';
import React from 'react';
import FeatureList from './FeatureList';

const Project = () => {
  return (
    <Box sx={{ m: 'auto auto', position: 'relative', width: '80%' }}>
      <Divider variant="middle">
        <Typography variant="h4" textAlign="center" sx={{}}>
          <Chip label="Project"></Chip>
        </Typography>
      </Divider>

      <Grid container justifyContent="center" spacing={5} padding={3}>
        <Grid item xs={12}>
          <Typography variant="h3">01.</Typography>
          <Typography variant="h3">Share your memories | Full stack</Typography>
          <FeatureList />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{ width: '100px', height: '100px', backgroundColor: 'red' }}
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
