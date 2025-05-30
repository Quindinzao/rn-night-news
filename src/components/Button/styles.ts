// External Libraries
import styled from 'styled-components/native';
import { ButtonStyleProps } from '../../interfaces/ButtonProps';
import { theme as shadowColor } from '../../styles/theme';

export const RNButton = styled.TouchableOpacity<ButtonStyleProps>`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  width: ${({ typeButton }) => typeButton === 'icon' ? '52px' : '100%'};

  height: 54px;
  align-items: center;
  justify-content: center;
`;

RNButton.defaultProps = {
  style: {
    shadowColor: shadowColor.colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
};
