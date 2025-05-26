import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const WIDTH_SCREEN = Dimensions.get('screen').width;

export const RNTextInput = styled.TextInput`
  height: 54px;
  width: ${WIDTH_SCREEN - 32}px;

  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  padding-left: ${({ theme }) => theme.spacing.md}px;
  font-family: ${({ theme }) => theme.fontFamily.bodyMedium};
  font-size: 16px;
`;

RNTextInput.defaultProps = {
  style: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
};

