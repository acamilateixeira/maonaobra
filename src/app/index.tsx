import { CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import '@fontsource/asap';

import { useTheme } from '../hooks/useTheme';

import { AppRoutes } from './routes/app';
import Scrollbars from 'react-custom-scrollbars';

export function App() {
  // shape mao na obra
  // colors: green={'#557C55'}, brown={'#AA3A3A'}, SoftYellow={'#F8E4B7'};

  const { type } = useTheme();

  const theme = createTheme({
    palette: {
      type: type,
      primary: {
        main: '#557C55',
      },
      secondary: {
        main: '#AA3A3A',
      },
    },
    typography: {
      fontSize: 14,
      fontFamily: 'Asap',
    },
    shape: {
      borderRadius: 16,
    },

    overrides: {
      MuiPaper: {
        elevation1: {
          boxShadow: '0 1px 8px 5px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Scrollbars
          autoHide
          style={{
            height: '100vh',
          }}
        >
          <AppRoutes />
        </Scrollbars>
      </ThemeProvider>
    </>
  );
}
