import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import {
  Text,
  View,
} from 'react-native';

const App = (): React.JSX.Element => {

  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
};

export default App;
