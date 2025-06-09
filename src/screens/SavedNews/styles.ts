// External Libraries
import styled from 'styled-components/native';

// Components
import Text from '../../components/Text';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: ${({ theme }) => theme.spacing.lg}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const TextVariant = styled(Text)`
  width: 100%;

  padding-top: ${({ theme }) => theme.spacing.lg}px;
  padding-bottom: ${({ theme }) => theme.spacing.md}px;
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
