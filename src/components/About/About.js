import { Container, Divider, Typography, Chip } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg">
      <Divider variant="middle">
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            fontFamily: 'Bungee Shade',
          }}
        >
          <Chip label="About"></Chip>
        </Typography>
      </Divider>
    </Container>
  );
};

export default About;
