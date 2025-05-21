import { Platform } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

type Theme = DefaultTheme;
const ios = Platform.OS === 'ios';

export type TextVariant =
  | 'titleLarge'
  | 'titleMedium'
  | 'titleRegular'
  | 'titleSmall'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'bodySmall'
  | 'captionLarge'
  | 'captionLargeItalic'
  | 'captionSmall'
  | 'captionSmallItalic';

export const getTextVariants = (theme: Theme) => ({
  titleLarge: {
    fontSize: theme.fontSize.xxl,
    color: theme.colors.titleColor,
    fontFamily: ios ? 'Times New Roman' : 'TimesNewRoman-Regular',
  },
  titleMedium: {
    fontSize: theme.fontSize.xl,
    color: theme.colors.titleColor,
    fontFamily: ios ? 'Times New Roman Bold' : 'TimesNewRoman-Bold',
  },
  titleRegular: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.titleColor,
    fontFamily: ios ? 'Times New Roman Bold' : 'TimesNewRoman-Bold',
  },
  titleSmall: {
    fontSize: theme.fontSize.md,
    color: theme.colors.titleColor,
    fontFamily: ios ? 'Roboto Medium' : 'Roboto-Medium',
  },
  bodyLarge: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.textColor,
    fontFamily: ios ? 'Times New Roman' : 'TimesNewRoman-Regular',
  },
  bodyMedium: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textColor,
    fontFamily: ios ? 'Roboto Medium' : 'Roboto-Medium',
  },
  bodySmall: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textColor,
    fontFamily: ios ? 'Times New Roman' : 'TimesNewRoman-Regular',
  },
  captionLarge: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.titleColor,
    fontFamily: ios ? 'Roboto Regular' : 'Roboto-Regular',
  },
  captionLargeItalic: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.titleColor,
    fontFamily: ios ? 'Roboto Medium Italic' : 'Roboto-MediumItalic',
  },
  captionSmall: {
    fontSize: theme.fontSize.xxs,
    color: theme.colors.titleColor,
    fontFamily: ios ? 'Times New Roman Bold Italic' : 'TimesNewRoman-BoldItalic',
  },
  captionSmallItalic: {
    fontSize: theme.fontSize.xxs,
    color: theme.colors.titleColor,
    fontFamily: ios ? 'Times New Roman Italic' : 'TimesNewRoman-Italic',
  },
});
