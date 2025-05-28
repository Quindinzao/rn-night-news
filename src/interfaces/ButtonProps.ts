// External Libraries
import { ReactNode } from 'react';

export type TypeButton = 'icon' | 'text'

export interface ButtonStyleProps {
  typeButton: TypeButton;
}

export interface ButtonProps {
  onPress: () => void;
  children: ReactNode;
  typeButton: TypeButton
}
