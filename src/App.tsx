import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import styled, { ThemeProvider } from 'styled-components/native';
import Logo from './assets/svg/Logo';
import { theme } from './styles/theme';

const App = (): React.JSX.Element => {

  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Logo height={64} width={64} />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundAppColor};;
`;


export default App;
