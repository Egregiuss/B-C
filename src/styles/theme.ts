import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4B8C',
      light: '#D4A5D6',
      dark: '#5D2E5E',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#D4A5D6',
      light: '#E8C5E9',
      dark: '#A67BA8',
      contrastText: '#000000',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 300,
      fontSize: '4rem',
      letterSpacing: '2px',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 400,
      fontSize: '3rem',
      color: '#8B4B8C',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 400,
      fontSize: '2rem',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 15,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(139, 75, 140, 0.3)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            '&:hover fieldset': {
              borderColor: '#8B4B8C',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#8B4B8C',
            },
          },
        },
      },
    },
  },
});

export default theme;