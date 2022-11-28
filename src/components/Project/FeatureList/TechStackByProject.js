import { Typography, Grid } from '@mui/material';

const TechStackIcon = (props) => (
  <Grid item>
    <Typography
      component="span"
      variant="body2"
      color="theme.palette.primary.light"
      sx={iconEffect}
      gutterBottom
      {...props}
    />
  </Grid>
);

const TechStackByProject = ({ entry }) => {
  return (
    <>
      <Grid container spacing={2} mb={2} justifyContent="center">
        {entry.techStack.lan.map((text, index) => (
          <TechStackIcon key={index}>{text}</TechStackIcon>
        ))}
      </Grid>
      <Grid container spacing={2} mb={2} justifyContent="center">
        {entry.techStack.fe.map((text, index) => (
          <TechStackIcon key={index}>{text}</TechStackIcon>
        ))}
      </Grid>
      <Grid container spacing={2} mb={2} justifyContent="center">
        {entry.techStack.be.map((text, index) => (
          <TechStackIcon key={index}>{text}</TechStackIcon>
        ))}
      </Grid>
      <Grid container spacing={2} mb={2} justifyContent="center">
        {entry.techStack.others.map((text, index) => (
          <TechStackIcon key={index}>{text}</TechStackIcon>
        ))}
      </Grid>
    </>
  );
};

const shadowGlobal = {
  boxInset: 'inset 3px 3px 6px #898989, inset -3px -3px 6px #f7f4f4',
  text: '1px 1px 2px #898989, -1px -1px 2px #f7f4f4',
  box: '3px 3px 5px #898989, -3px -3px 5px #edeaea',
};

const iconEffect = {
  boxShadow: shadowGlobal.boxInset,
  transition: 'all 0.3s ease-in-out',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  display: 'inline-block',
  p: '0.5rem 1rem',
  '&:hover': { boxShadow: shadowGlobal.box },
};

export default TechStackByProject;
