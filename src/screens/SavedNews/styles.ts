// External Libraries
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const Separator = styled.View`
  height: 16px;
`;

export const SearchFlatList = styled.FlatList.attrs(({ theme }) => ({
  contentContainerStyle: {
    paddingHorizontal: theme.spacing.md,
  },
  ListHeaderComponentStyle: {
    alignItems: 'center',
  },
}))``;

export const ItemCardScrollView = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    gap: theme.spacing.md,
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))``;
