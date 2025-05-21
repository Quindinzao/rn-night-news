import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';

const Search = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="url(#pattern0_61_335)" />
    <Defs>
      <Pattern
        id="pattern0_61_335"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_61_335" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_61_335"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default Search;
