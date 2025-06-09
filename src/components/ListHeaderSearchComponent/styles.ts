// External Libraries
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

// Components
import Text from '../Text';
import TextField from '../TextField';

const WIDTH_SCREEN = Dimensions.get('screen').width;

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

export const TextFieldStyled = styled(TextField)`
  width: ${WIDTH_SCREEN - 92}px;
`;

export const ItemCardScrollView = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    gap: theme.spacing.md,
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))``;

export const CategoryScrollView = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    gap: theme.spacing.xs,
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))`

  width: 100%;
  background-color: 'red';
`;
