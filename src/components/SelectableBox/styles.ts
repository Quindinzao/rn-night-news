import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const AnimatedBox = styled(Animated.View)`
  padding-top: ${({ theme }) => theme.spacing.sm}px;
  padding-bottom: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  align-self: flex-start;
`;

export const Container = styled.Pressable`
  padding-right: ${({ theme }) => theme.spacing.lg}px;
  padding-left: ${({ theme }) => theme.spacing.lg}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
