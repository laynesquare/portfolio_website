import { Divider, Grid, Popover, Button, Box, Typography } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import { mainTheme } from '../../themes/mainTheme';
import resume_en from '../../assets/resume/layne_res_en.pdf';
import resume_ch from '../../assets/resume/layne_res_ch.pdf';
import resume_all from '../../assets/resume/layne_res_all.pdf';

const Resume = ({ gridStyle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const resumeBtn = useRef([]);
  const open = Boolean(anchorEl);
  const id = open ? 'lan-picker' : undefined;

  const lanOptionClickHandle = (e) => {
    if (!open) return setAnchorEl(e.currentTarget);
    setAnchorEl(null);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => setAnchorEl(null));
  }, []);

  return (
    <>
      <Grid
        item
        ref={resumeBtn}
        sx={gridStyle}
        aria-describedby={id}
        onClick={lanOptionClickHandle}
      >
        #Resume
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={lanOptionClickHandle}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          elevation={8}
          sx={style.popupBackdrop}
        >
          <Box sx={style.popUpContent(resumeBtn)}>
            <Typography textAlign="center">Language</Typography>
            <Divider sx={style.divider} />
            <Button
              component="a"
              target="_blank"
              href={resume_en}
              fullWidth
              sx={style.engBtnText}
            >
              English
            </Button>
            <Button
              component="a"
              target="_blank"
              href={resume_ch}
              fullWidth
              sx={style.chBtnText}
            >
              繁體中文
            </Button>
            <Button
              component="a"
              target="_blank"
              href={resume_all}
              fullWidth
              sx={style.engBtnText}
            >
              See All
            </Button>
          </Box>
        </Popover>
      </Grid>
    </>
  );
};

const style = {
  popupBackdrop: {
    bgcolor: 'rgba(0, 0, 0, 0.3)',
  },

  divider: {
    m: '8px 0',
  },

  popUpContent: (resumeBtn) => ({
    boxShadow: 'inset 5px 5px 9px #898989, inset -5px -5px 9px #edeaea',
    bgcolor: mainTheme.palette.background.default,
    textShadow: '1px 1px 2px #898989, -1px -1px 2px #f7f4f4',
    border: '3px solid #CDCDCD',
    width: resumeBtn.current.offsetWidth + 20,
    p: 1,
  }),

  engBtnText: {
    textShadow: '1px 1px 2px #898989, -1px -1px 2px #f7f4f4',
  },

  chBtnText: {
    fontWeight: 'bold',
    textShadow: '1px 1px 2px #898989, -1px -1px 2px #f7f4f4',
  },
};

export default Resume;
