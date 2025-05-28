// External Libraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import FavoriteCategories from '../../screens/FavoriteCategories';

// Routes
import TabRoutes from '../custom/tab.routes';
import { propsNavigationStack } from '../models';

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

const AppStack = (): React.JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="TabRoutes" component={TabRoutes} />
      <Screen name="FavoriteCategories" component={FavoriteCategories} />
    </Navigator>
  );
};

export default AppStack;
