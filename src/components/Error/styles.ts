// External Libraries
import styled from 'styled-components/native';

// Components
import Text from '../Text';

export const ErrorText = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;
