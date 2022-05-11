import React from 'react';
import {
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from '@mui/material';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const listStyle = {
  secondary: {
    display: 'block',
    pl: '1.5rem',
    '&::before': {
      content: '"— "',
      position: 'absolute',
      transform: 'translateX(-1rem)',
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

const FeatureList = () => {
  return (
    <List sx={{ width: '100%' }}>
      {/* Mem Project */}
      {/* Mem Project */}
      {/* Mem Project */}
      {/* Mem Project */}

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: '#123b38' }}>
            <ArrowRightIcon sx={{ fontSize: '2rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                variant="h4"
                component="div"
                color="theme.palette.primary.light"
                gutterBottom
              >
                Overview
              </Typography>
            </React.Fragment>
          }
          secondary={textForMemProject.overview.map((text, index) => (
            <Typography
              sx={listStyle.secondary}
              component="div"
              variant="body1"
              color="theme.palette.primary.light"
              gutterBottom
              key={index}
            >
              {text}
            </Typography>
          ))}
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: '#123b38' }}>
            <ArrowRightIcon sx={{ fontSize: '2rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              variant="h4"
              component="div"
              color="theme.palette.primary.light"
              gutterBottom
            >
              Workings Outline
            </Typography>
          }
          secondary={textForMemProject.workingsOutline.map((text, index) => (
            <Typography
              sx={listStyle.secondary}
              component="div"
              variant="body1"
              color="theme.palette.primary.light"
              gutterBottom
              key={index}
            >
              {text}
            </Typography>
          ))}
        />
      </ListItem>

      {/* Mem Project */}
      {/* Mem Project */}
      {/* Mem Project */}
      {/* Mem Project */}
    </List>
  );
};

export default FeatureList;
