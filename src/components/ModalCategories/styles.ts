// External Libraries
import styled from 'styled-components/native';

export const ModalContent = styled.ScrollView`
  height: 90%;
  width: 100%;
  position: absolute;
  bottom: 0;

  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  padding-right: ${({ theme }) => theme.spacing.lg}px;
  padding-left: ${({ theme }) => theme.spacing.lg}px;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
`;

export const CategoriesMosaic = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xl}px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: ${({ theme }) => theme.spacing.lg}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;
