// External Libraries
import 'styled-components/native';

// Styles
import { theme } from './theme';

type ThemeType = typeof theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
