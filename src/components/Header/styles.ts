import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Logo from '../../assets/svg/Logo';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export const RNHeader = styled.View`
  justify-content: flex-end;
  align-items: flex-start;

  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_WIDTH}px;
  padding: 32px 24px;
`;

export const ImageHeader = styled.Image`
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_WIDTH}px;

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
