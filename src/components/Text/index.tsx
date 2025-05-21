import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import { NNText } from './styles';
import { TextVariant } from '../../styles/textVariantes';

type TextProps = RNTextProps & {
  type: TextVariant;
  children: React.ReactNode;
};

const Text = ({type, children, ...rest}: TextProps): React.JSX.Element => {
  return (
    <NNText type={type} {...rest}>
      {children}
    </NNText>
  );
};

export default Text;
