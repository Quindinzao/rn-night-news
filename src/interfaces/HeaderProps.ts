// External Libraries
import { ImageSourcePropType } from 'react-native';

export interface HeaderProps {
  isBack?: boolean;
  isSaved?: boolean;
  showIsSaved?: boolean;
  title: string;
  imageStr: ImageSourcePropType;
}
