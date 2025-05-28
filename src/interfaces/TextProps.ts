// External Librarie
import { TextProps as RNTextProps } from 'react-native';

// Styles
import { TextVariant } from '../styles/textVariants';

export interface TextProps extends RNTextProps {
  textType: TextVariant;
  children: React.ReactNode;
}
