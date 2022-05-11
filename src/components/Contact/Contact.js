import { Container, Divider, Typography, Chip } from '@mui/material';

const Contact = () => {
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
          <Chip label="Contact"></Chip>
        </Typography>
      </Divider>
    </Container>
  );
};

export default Contact;
