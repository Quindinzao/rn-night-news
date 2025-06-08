// External Libraries
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

// Assets
import Logo from '../../assets/svg/Logo';
import LinearGradient from 'react-native-linear-gradient';

const WIDTH_SCREEN = Dimensions.get('screen').width;

export const RNHeader = styled.View`
  justify-content: flex-end;
  align-items: flex-start;

  width: ${WIDTH_SCREEN}px;
  height: ${WIDTH_SCREEN}px;
  padding: 32px 24px;
`;

export const Shadow = styled(LinearGradient).attrs({
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
})`
  width: ${WIDTH_SCREEN}px;
  height: ${WIDTH_SCREEN}px;

  position: absolute;
  top: 0;
  right: 0;
`;

export const ImageHeader = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${WIDTH_SCREEN}px;
  height: ${WIDTH_SCREEN}px;

  position: absolute;
  left: 0;
`;

export const StyledLogo = styled(Logo).attrs({
  width: 64,
  height: 64,
})`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xxl}px;
  align-self: center;
`;

export const TouchableReturn = styled.TouchableOpacity`
  position: absolute;
  top: 32px;
  left: 16px;
`;

export const TouchableSave = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 32px;

  right: ${({ theme }) => theme.spacing.md}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`;
