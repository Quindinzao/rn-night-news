import {Dimensions} from 'react-native';

const WIDTH_SCREEN = Dimensions.get('screen').width;

export const baseOptions = {
  vertical: false,
  width: WIDTH_SCREEN,
  height: 405,
  marginLeft: 16,
  marginRight: 16,
  alignItem: 'center',
  justifyContent: 'center',
} as const;
