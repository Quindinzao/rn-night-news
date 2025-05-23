import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import { RNText } from './styles';
import { TextVariant } from '../../styles/textVariantes';

type TextProps = RNTextProps & {
  textType: TextVariant;
  children: React.ReactNode;
};

const Text = ({textType, children, ...rest}: TextProps): React.JSX.Element => {
  return (
    <RNText textType={textType} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
