// External Libraries
import styled from 'styled-components/native';
import { Animated } from 'react-native';

// Styles
import { theme as shadowColor } from '../../styles/theme';

export const RNSelectableBox = styled(Animated.View)`
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  margin-right: ${({ theme }) => theme.spacing.md}px;

  align-self: flex-start;
`;

export const Container = styled.Pressable`
  padding-top: ${({ theme }) => theme.spacing.sm}px;
  padding-bottom: ${({ theme }) => theme.spacing.sm}px;
  padding-right: ${({ theme }) => theme.spacing.lg}px;
  padding-left: ${({ theme }) => theme.spacing.lg}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

RNSelectableBox.defaultProps = {
  style: {
    shadowColor: shadowColor.colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
};
