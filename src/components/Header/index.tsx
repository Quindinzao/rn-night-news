import React from 'react';
import { RNHeader, ImageHeader, StyledLogo } from './styles';
import Text from '../Text';
import { ImageSourcePropType } from 'react-native';

type HeaderProps = {
  title: string;
  imageStr: ImageSourcePropType;
};

const Header = ({ title, imageStr }: HeaderProps): React.JSX.Element => {
  return (
    <RNHeader>
      <ImageHeader source={imageStr} />
      <StyledLogo />
      <Text type="titleLarge">{title}</Text>
    </RNHeader>
  );
};

export default Header;
