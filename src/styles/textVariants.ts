// External Libraries
import { DefaultTheme } from 'styled-components/native';

type Theme = DefaultTheme;

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
    color: theme.colors.white,
    fontFamily: theme.fontFamily.titleLarge,
  },
  titleMedium: {
    fontSize: theme.fontSize.xl,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.titleMedium,
  },
  titleRegular: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.titleRegular,
  },
  titleSmall: {
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.titleSmall,
  },
  bodyLarge: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.gray,
    fontFamily: theme.fontFamily.bodyLarge,
  },
  bodyMedium: {
    fontSize: theme.fontSize.md,
    color: theme.colors.gray,
    fontFamily: theme.fontFamily.bodyMedium,
  },
  bodySmall: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.gray,
    fontFamily: theme.fontFamily.bodySmall,
  },
  captionLarge: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.captionLarge,
  },
  captionLargeItalic: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.captionLargeItalic,
  },
  captionSmall: {
    fontSize: theme.fontSize.xxs,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.captionSmall,
  },
  captionSmallItalic: {
    fontSize: theme.fontSize.xxs,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.captionSmallItalic,
  },
});
