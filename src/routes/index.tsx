// External libraries
import { NavigationContainer } from '@react-navigation/native';

// Routes
import AppStack from './stacks/app.routes';

const Routes = (): React.JSX.Element => {

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Routes;
