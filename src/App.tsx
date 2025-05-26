import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { theme } from './styles/theme';
import SearchList from './screens/SearchList';

const App = (): React.JSX.Element => {

  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <SearchList />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
