// External Libraries
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Routes
import Routes from './routes';

// Hooks
// import { useNewsLoader } from './hooks/useNewsLoader';

// Styles
import { theme } from './styles/theme';

const App = (): React.JSX.Element => {

  // const { data, loading, error } = useNewsLoader();

  useEffect(() => {
    // if (!loading) {
      BootSplash.hide({ fade: true });
    // }
  }, []);

  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
