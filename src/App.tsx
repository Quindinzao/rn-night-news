import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import styled from 'styled-components/native';
import {
  Text,
} from 'react-native';
import Logo from './assets/svg/Logo';

const App = (): React.JSX.Element => {

  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <Container>
      <Text>Hello World!</Text>
      <Logo height={32} width={32} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;


export default App;
