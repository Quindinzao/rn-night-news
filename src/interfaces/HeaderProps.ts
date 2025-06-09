// External Libraries
import { ImageSourcePropType } from 'react-native';

export interface HeaderProps {
  onToggle?: () => void;
  isBack?: boolean;
  isSaved?: boolean;
  title: string;
  imageStr: ImageSourcePropType;
}
