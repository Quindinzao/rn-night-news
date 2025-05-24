import { TextVariant } from '../styles/textVariantes';
import { TextProps as RNTextProps } from 'react-native';

export interface TextProps extends RNTextProps {
  textType: TextVariant;
  children: React.ReactNode;
}
