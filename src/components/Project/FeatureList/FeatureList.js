import {
  ListItemAvatar,
  useMediaQuery,
  ListItemText,
  Typography,
  ListItem,
  Avatar,
  List,
} from '@mui/material';
import { textForEngProject, textForMemProject } from './ProjectListText';
import TechStackByProject from './TechStackByProject';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const FeatureList = ({ whichProject }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <List sx={{ width: '100%' }}>
      <ListItem alignItems="flex-start" sx={{}}>
        {!isMobile && itemBulletPoint}
        <ListItemText
          primary={<Chapter chapter={'Overview'} />}
          secondary={
            whichProject === 'Mem'
              ? detailed(textForMemProject, 'overview')
              : detailed(textForEngProject, 'overview')
          }
        />
      </ListItem>

      {/* --------------------------------------------------------- */}
      {/* --------------------------------------------------------- */}
      {/* --------------------------------------------------------- */}

      <ListItem alignItems="flex-start" sx={{ mb: '1rem' }}>
        {!isMobile && itemBulletPoint}
        <ListItemText
          primary={<Chapter chapter={'Tech Stack'} />}
          secondary=" "
        />
      </ListItem>

      {whichProject === 'Mem' ? (
        <TechStackByProject entry={textForMemProject} />
      ) : (
        <TechStackByProject entry={textForEngProject} />
      )}

      {/* ---------------------------------------------------------- */}
      {/* ---------------------------------------------------------- */}
      {/* ---------------------------------------------------------- */}

      <ListItem alignItems="flex-start" sx={{}}>
        {!isMobile && itemBulletPoint}
        <ListItemText
          primary={<Chapter chapter={'Workings Outline'} />}
          secondary={
            whichProject === 'Mem'
              ? detailed(textForMemProject, 'workingsOutline')
              : detailed(textForEngProject, 'workingsOutline')
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
