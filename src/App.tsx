import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { theme } from './styles/theme';
import Home from './screens/Home';
import { useNewsLoader } from './hooks/useNewsLoader';

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
