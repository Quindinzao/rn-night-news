// External Libraries
import styled from 'styled-components/native';

// Styles
import { theme as shadowColor } from '../../styles/theme';

export const RNTextField = styled.TextInput`
  height: 54px;
  width: 100%;

  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  padding-left: ${({ theme }) => theme.spacing.md}px;
  font-family: ${({ theme }) => theme.fontFamily.bodyMedium};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
`;

RNTextField.defaultProps = {
  style: {
    shadowColor: shadowColor.colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
};

