import styled from 'styled-components/native';
import Text from '../../components/Text';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const TextVariant = styled(Text)`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing.lg}px;
  padding-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const HomeFlatList = styled.FlatList.attrs(({ theme }) => ({
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
