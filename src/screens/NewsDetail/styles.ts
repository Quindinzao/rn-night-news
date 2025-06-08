// External Libraries
import styled from 'styled-components/native';
import Text from '../../components/Text';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const Content = styled.View`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  padding-right: ${({ theme }) => theme.spacing.md}px;
  padding-left: ${({ theme }) => theme.spacing.md}px;
`;

export const Row = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

export const StyledText = styled(Text)`
  flex-shrink: 1;
`;

export const StyledTextContent = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.xl}px;
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const TextVariant = styled(Text)`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing.xl}px;
  padding-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const NewsDetailFlatList = styled.FlatList`
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const Separator = styled.View`
  width: 16px;
`;
