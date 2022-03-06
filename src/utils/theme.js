import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: '#008073',
    },
  },
});

export default theme;