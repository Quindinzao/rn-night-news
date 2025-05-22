import styled from 'styled-components/native';

export const RNButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;

  height: 54px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

RNButton.defaultProps = {
  style: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
};
