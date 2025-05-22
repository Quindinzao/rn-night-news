import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Logo from '../../assets/svg/Logo';

const { width: widthScreen } = Dimensions.get('window');

export const RNHeader = styled.View`
  justify-content: flex-end;
  align-items: flex-start;

  width: ${widthScreen}px;
  height: ${widthScreen}px;
  padding: 32px 24px;
`;

export const ImageHeader = styled.Image`
  width: ${widthScreen}px;
  height: ${widthScreen}px;

  position: absolute;
`;

export const StyledLogo = styled(Logo).attrs({
  width: 64,
  height: 64,
})`
  position: absolute;
  top: ${props => props.theme.spacing.xxl}px;
  align-self: center;
`;
