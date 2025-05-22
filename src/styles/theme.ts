import { Platform } from 'react-native';

const ios = Platform.OS === 'ios';

export const theme = {
  colors: {
    backgroundAppColor: '#101517',
    primaryColor: '#1A2428',
    textColor: '#CCCCCC',
    titleColor: '#FFFFFF',
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  borderRadius: {
    sm: 4,
    md: 6,
    lg: 12,
  },

  fontSize: {
    xxs: 11,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
  },

  fontFamily: {
    titleLarge: ios ? 'Times New Roman' : 'TimesNewRoman-Regular',
    titleMedium: ios ? 'Times New Roman Bold' : 'TimesNewRoman-Bold',
    titleRegular: ios ? 'Times New Roman Bold' : 'TimesNewRoman-Bold',
    titleSmall: ios ? 'Roboto Medium' : 'Roboto-Medium',
    bodyLarge: ios ? 'Times New Roman' : 'TimesNewRoman-Regular',
    bodyMedium: ios ? 'Roboto Medium' : 'Roboto-Medium',
    bodySmall: ios ? 'Times New Roman' : 'TimesNewRoman-Regular',
    captionLarge: ios ? 'Roboto Regular' : 'Roboto-Regular',
    captionLargeItalic: ios ? 'Roboto Medium Italic' : 'Roboto-MediumItalic',
    captionSmall: ios ? 'Times New Roman Bold Italic' : 'TimesNewRoman-BoldItalic',
    captionSmallItalic: ios ? 'Times New Roman Italic' : 'TimesNewRoman-Italic',
  },
};
