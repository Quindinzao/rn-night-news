import styled from 'styled-components/native';
import Text from '../../components/Text';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const TextVariant = styled(Text)`
  padding-top: ${({ theme }) => theme.spacing.lg}px;
  padding-bottom: ${({ theme }) => theme.spacing.md}px;
  width: 100%;
`;

export const SearchFlatList = styled.FlatList.attrs(({ theme }) => ({
  contentContainerStyle: {
    paddingHorizontal: theme.spacing.md,
  },
  ListHeaderComponentStyle: {
    alignItems: 'center',
  },
}))``;

export const SearchListScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: 16,
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Separator = styled.View`
  height: 16px;
`;
