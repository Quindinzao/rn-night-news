// External libraries
import styled from 'styled-components/native';

// Components
import Text from '../../components/Text';

export const TextVariant = styled(Text)`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing.lg}px;
  padding-bottom: ${({ theme }) => theme.spacing.md}px;
`;
