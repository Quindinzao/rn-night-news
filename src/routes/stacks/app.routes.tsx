// External Libraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import NewsDetail from '../../screens/NewsDetail';

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
      <Screen name="NewsDetail" component={NewsDetail} />
    </Navigator>
  );
};

export default AppStack;
