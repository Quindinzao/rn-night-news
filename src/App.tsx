import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { theme } from './styles/theme';
import Home from './screens/Home';
import api from './services/api';
import { API_KEY } from '@env';
import { Alert } from 'react-native';

const App = (): React.JSX.Element => {

  const getData = async () => {
    try {
      const data = await api(`top-headlines?country=us&apiKey=${API_KEY}`);
      Alert.alert('data', JSON.stringify(data));
    } catch (error: any) {
      Alert.alert('Hey', error.message);
    }
  };

  useEffect(() => {
    getData();
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
