import React from 'react';
import { RNText } from './styles';
import { TextProps } from '../../interfaces/TextProps';

const Text = ({textType, children, ...rest}: TextProps): React.JSX.Element => {
  return (
    <RNText textType={textType} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
