import React from 'react';
import { Container, StyledLogo } from './styles';
import Text from '../../components/Text';
import SelectableBox from '../../components/SelectableBox';

const FavoriteCategories = (): React.JSX.Element => {

  return (
    <Container>
      <StyledLogo />
      <Text type="titleLarge">Choose your three favorite categories</Text>
      <SelectableBox label={'Technology'} />
    </Container>
  );
};

export default FavoriteCategories;
