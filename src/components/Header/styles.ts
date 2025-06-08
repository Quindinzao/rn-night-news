// External Libraries
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

// Assets
import Logo from '../../assets/svg/Logo';

const WIDTH_SCREEN = Dimensions.get('screen').width;

export const RNHeader = styled.View`
  justify-content: flex-end;
  align-items: flex-start;

  width: ${WIDTH_SCREEN}px;
  height: ${WIDTH_SCREEN}px;
  padding: 32px 24px;
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
  top: ${({ theme }) => theme.spacing.xxl}px;
  left: 16px;
`;

export const TouchableSave = styled.TouchableOpacity`
  width: 48px;
  height: 84px;
  position: absolute;
  top: 0;
  right: 24px;
  align-items: center;
  justify-content: flex-end;

  padding-bottom: ${({ theme }) => theme.spacing.md}px;
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.md}px;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.md}px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`;
