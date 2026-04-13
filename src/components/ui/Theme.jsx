import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3A10E5',
      light: '#D7E1F8',
      dark: '#3A10E5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0F85F1',
      light: '#D8D9DB',
      dark: '#757575',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2AB930',
    },
    error: {
      main: '#F61414',
    },
    warning: {
      main: '#FE5102',
    },
    background: {
      default: '#D7E1F8',
      paper: '#ffffff',
    },
    text: {
      primary: '#4C4859',
      secondary: '#757575',
      disabled: '#C4C4C4',
    },
    action: {
      active: '#3A10E5',
      hover: '#0F85F1',
      disabled: '#9A9A9A',
    },
    divider: '#F7F7F7',
  },
  typography: {
    fontFamily: '"Poppins", "Gilroy", sans-serif',
  },
})

export default theme

/* <ThemeProvider theme={theme}> пример работы в других компонентах */