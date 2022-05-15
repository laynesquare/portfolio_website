import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 3,
          textTransform: 'none',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
  },

  typography: {
    fontFamily: 'Krona One',
  },

  palette: {
    primary: { main: '#123b38', light: '#1F625E' },
    secondary: { main: '#ff616f' },
    background: { default: '#CDCDCD' },
    text: { primary: '#123B38', secondary: '#164946' },
    mode: 'light',
  },
});
