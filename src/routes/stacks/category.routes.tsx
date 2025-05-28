// External libraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import FavoriteCategories from '../../screens/FavoriteCategories';

// Routes
import { propsNavigationStack } from '../models';

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

const CategoryStack = (): React.JSX.Element => {
  return (
    <Navigator
      initialRouteName="FavoriteCategories"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="FavoriteCategories" component={FavoriteCategories} />
    </Navigator>
  );
};

export default CategoryStack;
