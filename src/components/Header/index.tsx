import React from 'react';
import { RNHeader, ImageHeader, StyledLogo } from './styles';
import Text from '../Text';
import { HeaderProps } from '../../interfaces/HeaderProps';

const Header = (props: HeaderProps): React.JSX.Element => {
  return (
    <RNHeader>
      <ImageHeader source={props.imageStr} />
      <StyledLogo />
      <Text textType="titleLarge">{props.title}</Text>
    </RNHeader>
  );
};

export default Header;
