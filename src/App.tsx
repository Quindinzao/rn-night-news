
// External Libraries
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Routes
import Routes from './routes';

// Context
import { CategoryProvider } from './contexts/CategoryContext';
import { NewsProvider } from './contexts/NewsContext';

// Styles
import { theme } from './styles/theme';

const App = (): React.JSX.Element => {

  return (
    <GestureHandlerRootView>
      <CategoryProvider>
        <NewsProvider>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </NewsProvider>
      </CategoryProvider>
    </GestureHandlerRootView>
  );
};

export default App;
