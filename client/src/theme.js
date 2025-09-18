import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f6c500' // warm yellow
    },
    secondary: {
      main: '#000000' // black
    },
    background: {
      default: '#000000ff'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#000000'
        }
      }
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  }
});

export default theme;
