import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundAppColor};
`;

export const BodyFlatList = styled.FlatList`
  /* justify-content: flex-start;
  align-items: center; */

  /* padding-right: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.md}; */
`;
