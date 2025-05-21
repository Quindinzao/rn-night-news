import React from 'react';
import { NNHeader, ImageHeader, StyledLogo } from './styles';
import Text from '../Text';
import { ImageSourcePropType } from 'react-native';

type HeaderProps = {
  title: string;
  imageStr: ImageSourcePropType;
};

const Header = ({ title, imageStr }: HeaderProps): React.JSX.Element => {
  return (
    <NNHeader>
      <ImageHeader source={imageStr} />
      <StyledLogo />
      <Text type="titleLarge">{title}</Text>
    </NNHeader>
  );
};

export default Header;
