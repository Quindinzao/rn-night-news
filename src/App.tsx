// External Libraries
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BootSplash from 'react-native-bootsplash';

// Screens
import Home from './screens/Home';

// Hooks
import { useNewsLoader } from './hooks/useNewsLoader';

// Styles
import { theme } from './styles/theme';

const App = (): React.JSX.Element => {

  const { data, loading, error } = useNewsLoader();

  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
