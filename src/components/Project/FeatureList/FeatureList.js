import {
  ListItemAvatar,
  useMediaQuery,
  ListItemText,
  Typography,
  ListItem,
  Avatar,
  List,
} from '@mui/material';
import { textEngProject, textMemProject } from './ProjectListText';
import TechStackByProject from './TechStackByProject';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const FeatureList = ({ type }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <List sx={{ width: '100%' }}>
      <ListItem alignItems="flex-start">
        {!isMobile && itemBulletPoint}
        <ListItemText
          primary={<Chapter chapter={'Overview'} />}
          secondary={
            type === 'Mem'
              ? detailed(textMemProject, 'overview')
              : detailed(textEngProject, 'overview')
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start" sx={{ mb: '1rem' }}>
        {!isMobile && itemBulletPoint}
        <ListItemText
          primary={<Chapter chapter={'Tech Stack'} />}
          secondary=" "
        />
      </ListItem>

      {type === 'Mem' ? (
        <TechStackByProject entry={textMemProject} />
      ) : (
        <TechStackByProject entry={textEngProject} />
      )}

      <ListItem alignItems="flex-start">
        {!isMobile && itemBulletPoint}
        <ListItemText
          primary={<Chapter chapter={'Workings Outline'} />}
          secondary={
            type === 'Mem'
              ? detailed(textMemProject, 'workingsOutline')
              : detailed(textEngProject, 'workingsOutline')
          }
        />
      </ListItem>
    </List>
  );
};

const Chapter = ({ chapter }) => (
  <Typography variant="h5" component="span" color="theme.palette.primary.light">
    {chapter}
  </Typography>
);

const detailed = (entry, chapter) => {
  return entry[chapter].map((text, index) => (
    <Typography
      gutterBottom
      component="span"
      variant="body2"
      color="theme.palette.primary.light"
      key={index}
      mt={1}
      sx={listStyle.secondary}
    >
      {text}
    </Typography>
  ));
};

const itemBulletPoint = (
  <ListItemAvatar>
    <Avatar
      sx={{
        backgroundColor: '#123b38',
        boxShadow: '2px 2px 4px #898989, -2px -2px 4px #f7f4f4',
        height: '1.9rem',
        width: '1.9rem',
      }}
    >
      <ArrowRightIcon sx={{ fontSize: '2rem' }} />
    </Avatar>
  </ListItemAvatar>
);

const listStyle = {
  secondary: {
    transform: 'translateX(-1.2rem)',
    display: 'block',
    pl: '1.7rem',

    '&::before': {
      transform: 'translateX(-1.2rem)',
      position: 'absolute',
      content: '"-"',
    },
  },
};

export default FeatureList;
