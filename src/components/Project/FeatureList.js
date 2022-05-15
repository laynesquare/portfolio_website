import React from 'react';
import {
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Grid,
} from '@mui/material';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const TechStackIcon = (props) => (
  <Grid item>
    <Typography
      {...props}
      component="span"
      color="theme.palette.primary.light"
      variant="body2"
      sx={iconEffect}
      gutterBottom
    />
  </Grid>
);

const iconEffect = {
  display: 'inline-block',
  transition: 'all 0.3s ease-in-out',
  boxShadow: 'inset 4px 4px 9px #898989,  inset -4px -4px 9px #f7f4f4',
  p: '0.5rem 1rem',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  '&:hover': {
    boxShadow: ' 3px 3px 5px #898989,   -3px -3px 5px #edeaea',
  },
};

const listStyle = {
  secondary: {
    display: 'block',
    pl: '1.7rem',
    '&::before': {
      content: '"-"',
      position: 'absolute',
      transform: 'translateX(-1.2rem)',
    },
  },
};

const textForMemProject = {
  overview: [
    'Create a platform where people could share treasured memories in their lives with anyone out there throughout the globe.',
    'Each user can register a whole new account to enable full functionality coming with the application, or just simply log in via Google Oauth 2.0 to enjoy the full access.',
    "With the account, you can not only create, delete, and edit your posts but also give a thumbs up to other users' posts.",
    'Incorporation of jsonwebtoken and bcryptjs libraries allows for authorization and authentication.',
  ],

  techStack: {
    lan: ['Javascript', 'HTML', 'CSS'],
    fe: ['React (hooks)', 'React Router Dom', 'React Redux', 'Material UI'],
    be: ['Node.js', 'Express', 'Mongoose', 'MongoDB', 'REST API'],
    others: ['Axios', 'jsonwebtoken', 'bcryptjs', 'Netifly', 'Heroku'],
  },

  workingsOutline: [
    'Account registration data will be sent to the backend via the HTTP POST request method with the REST API routes.',
    'Upon receiving, the password will be hashed using the bcryptjs library and then, along with other account info, stored in the non-relational database MongoDB.',
    'The server will proceed to generate a token for the given user through the jsonwebtoken library to allow for later-on verification, afterward sending the package, in JSON form, that includes the account data and the token to the client-side.',
    'On the frontend, the processed user info, and the token will be stored in the DOM storage (local storage mechanism), enabling a persistent logged-in state.',
    'CRUD operations (Create, Read, Update, Delete) on the given posts are therefore allowed for the user via the REST API routes, with a token included in the HTTP request header of authorization.',
    'The server will decode the included token and go on to validation and expiration check (an hour, in this case), leading up to the permission on the intended operations.',
    "The updated data from the backend will be handled in the Redux's state container and mainly with destructuring assignment, after which, dependent upon different scenarios, respective React components are allowed to make use of the handled data.",
  ],
};

const textForEngProject = {
  overview: [
    'Solve the inconvenience of encountering unknown words upon reading an English passage and having to look up elsewhere.',
    'Read multiple professional-written passages fetched via New York Times API with a juxtaposed dictionary to facilitate English learning.',
    'Responsive design fitting for all mobile devices.',
  ],
  techStack: {
    lan: ['Javascript', 'HTML', 'CSS'],
    fe: ['React (hooks)', 'React Redux', 'Material UI'],
    be: ['Node.js', 'Express'],
    others: ['Axios', 'Netifly', 'Heroku'],
  },
  workingsOutline: [
    'The input search keyword will serve as the value to the property name of searchTerm, which corresponds to the URL specification for the New York Times API.',
    'The fetched passages, along with the images coming with the texts, will be shown in the main display panel.',
    "Every word within the given passages is clickable. Once it's clicked, another HTTP GET request will be sent with the intended word serving as the URL parameter for the Free Dictionary API.",
    "All the fetched data through NTY and Free Dictionary APIs are stored in the Redux's state container, after which, dependent upon different scenarios, respective React components are allowed to make use of the handled data.",
  ],
};

const FeatureList = ({ whichProject }) => {
  return (
    <List sx={{ width: '100%' }}>
      {/* Mem Project */}
      {/* Mem Project */}
      {/* Mem Project */}
      {/* Mem Project */}
      {/* Mem Project */}
      {/* {whichProject === 'Mem' && ( */}
      <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              sx={{
                backgroundColor: '#123b38',
                height: '1.9rem',
                width: '1.9rem',
              }}
            >
              <ArrowRightIcon sx={{ fontSize: '2rem' }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                variant="h5"
                component="span"
                color="theme.palette.primary.light"
              >
                Overview
              </Typography>
            }
            secondary={
              whichProject === 'Mem'
                ? textForMemProject.overview.map((text, index) => (
                    <Typography
                      sx={listStyle.secondary}
                      component="span"
                      variant="body2"
                      color="theme.palette.primary.light"
                      gutterBottom
                      key={index}
                      mt={1}
                    >
                      {text}
                    </Typography>
                  ))
                : textForEngProject.overview.map((text, index) => (
                    <Typography
                      sx={listStyle.secondary}
                      component="span"
                      variant="body2"
                      color="theme.palette.primary.light"
                      gutterBottom
                      key={index}
                      mt={1}
                    >
                      {text}
                    </Typography>
                  ))
            }
          />
        </ListItem>
        <ListItem
          alignItems="flex-start"
          sx={{ '&:hover': { '.arrow': { transform: '' } }, mb: '1rem' }}
        >
          <ListItemAvatar>
            <Avatar
              className="arrow"
              sx={{
                backgroundColor: '#123b38',
                height: '1.9rem',
                width: '1.9rem',
              }}
            >
              <ArrowRightIcon sx={{ fontSize: '2rem' }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                variant="h5"
                component="span"
                color="theme.palette.primary.light"
              >
                Tech Stack
              </Typography>
            }
            secondary=" "
          />
        </ListItem>
        {/* Tech Stack */}
        {/* Tech Stack */}
        {/* Tech Stack */}
        {/* Tech Stack */}
        {/* Tech Stack */}
        {/* Tech Stack */}
        {/* Tech Stack */}
        {/* Tech Stack */}
        {whichProject === 'Mem' && (
          <>
            <Grid container spacing={2} mb={2} justifyContent="center">
              {textForMemProject.techStack.lan.map((text, index) => (
                <TechStackIcon key={index}>{text}</TechStackIcon>
              ))}
            </Grid>
            <Grid container spacing={2} mb={2} justifyContent="center">
              {textForMemProject.techStack.fe.map((text, index) => (
                <TechStackIcon key={index}>{text}</TechStackIcon>
              ))}
            </Grid>
            <Grid container spacing={2} mb={2} justifyContent="center">
              {textForMemProject.techStack.be.map((text, index) => (
                <TechStackIcon key={index}>{text}</TechStackIcon>
              ))}
            </Grid>
            <Grid container spacing={2} mb={2} justifyContent="center">
              {textForMemProject.techStack.others.map((text, index) => (
                <TechStackIcon key={index}>{text}</TechStackIcon>
              ))}
            </Grid>
          </>
        )}

        {whichProject === 'Eng' && (
          <>
            <Grid container spacing={2} mb={2} justifyContent="center">
              {textForEngProject.techStack.lan.map((text, index) => (
                <TechStackIcon key={index}>{text}</TechStackIcon>
              ))}
            </Grid>
            <Grid container spacing={2} mb={2} justifyContent="center">
              {textForEngProject.techStack.fe.map((text, index) => (
                <TechStackIcon key={index}>{text}</TechStackIcon>
              ))}
            </Grid>
            <Grid container spacing={2} mb={2} justifyContent="center">
              {textForEngProject.techStack.be.map((text, index) => (
                <TechStackIcon key={index}>{text}</TechStackIcon>
              ))}
            </Grid>
            <Grid container spacing={2} mb={2} justifyContent="center">
              {textForEngProject.techStack.others.map((text, index) => (
                <TechStackIcon key={index}>{text}</TechStackIcon>
              ))}
            </Grid>
          </>
        )}

        {/* Working Outline */}
        {/* Working Outline */}
        {/* Working Outline */}
        {/* Working Outline */}
        {/* Working Outline */}
        {/* Working Outline */}
        {/* Working Outline */}
        {/* Working Outline */}
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              sx={{
                backgroundColor: '#123b38',
                height: '1.9rem',
                width: '1.9rem',
              }}
            >
              <ArrowRightIcon sx={{ fontSize: '2rem' }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                variant="h5"
                component="span"
                color="theme.palette.primary.light"
                gutterBottom
              >
                Workings Outline
              </Typography>
            }
            secondary={
              whichProject === 'Mem'
                ? textForMemProject.workingsOutline.map((text, index) => (
                    <Typography
                      sx={listStyle.secondary}
                      component="span"
                      variant="body2"
                      color="theme.palette.primary.light"
                      key={index}
                      mt={1}
                    >
                      {text}
                    </Typography>
                  ))
                : textForEngProject.workingsOutline.map((text, index) => (
                    <Typography
                      sx={listStyle.secondary}
                      component="span"
                      variant="body2"
                      color="theme.palette.primary.light"
                      key={index}
                      mt={1}
                    >
                      {text}
                    </Typography>
                  ))
            }
          />
        </ListItem>
      </>
      {/* Eng Project */}
      {/* Eng Project */}
      {/* Eng Project */}
      {/* Eng Project */}
    </List>
  );
};

export default FeatureList;
