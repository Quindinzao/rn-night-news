// External Libraries
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const SearchFlatList = styled.FlatList.attrs(({ theme }) => ({
  contentContainerStyle: {
    paddingHorizontal: theme.spacing.md,
  },
  ListHeaderComponentStyle: {
    alignItems: 'center',
  },
}))``;

export const Separator = styled.View`
  height: 16px;
`;
