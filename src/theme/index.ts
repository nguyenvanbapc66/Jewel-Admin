import { createTheme } from '@material-ui/core';

const common = {
  black: '#1a202c',
};

const theme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: common.black,
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    h5: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    h6: {
      fontSize: '24px',
      lineHeight: '30px',
    },
    body1: {
      fontSize: '18px',
      lineHeight: '21px',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '18px',
    },
    caption: {
      fontSize: '12px',
      lineHeight: '15px',
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h5: 'h1',
        h6: 'h2',
        body1: 'p',
        body2: 'p',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 768,
      lg: 1200 + 48, // content's width + padding left + padding + right
      xl: 1440,
    },
  },
});

export default theme;
