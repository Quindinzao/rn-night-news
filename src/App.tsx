import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './styles/theme';
import Home from './screens/Home';

const App = (): React.JSX.Element => {

  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
