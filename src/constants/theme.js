import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    green: {
      light: '#183018',
      main: '#183018',
      dark: '#183018',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    // You need to add primary for it to work directly with the color prop
    primary: {
      light: '#66bb6a',
      main: '#43a047',
      dark: '#2e7d32',
      contrastText: '#ffffff',
    },
  },
});
