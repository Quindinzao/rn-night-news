
// External Libraries
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Routes
import Routes from './routes';

// Context
import { CategoriesProvider } from './contexts/CategoriesContext';

// Styles
import { theme } from './styles/theme';

const App = (): React.JSX.Element => {

  return (
    <GestureHandlerRootView>
      <CategoriesProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </CategoriesProvider>
    </GestureHandlerRootView>
  );
};

export default App;
