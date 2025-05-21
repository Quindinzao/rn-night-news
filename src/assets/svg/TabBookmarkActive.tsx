import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';

const TabBookmarkActive = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="url(#pattern0_61_331)" />
    <Defs>
      <Pattern
        id="pattern0_61_331"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_61_331" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_61_331"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACOUlEQVR4nO2dQWrCUBQA30W6aqFX0F3Pq5YuumgPkOvUUi8wJZBdMRrzI2/SNyC4UJl5T6NE0IiiKIqiKIqiKIoGAA/AATjh5wS8Ac+m4X+xPo59W2RneOavlV1kZyWHnXP8RHZYOZEdVk5kh5UT2WHlRHbsAcj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj99QHI/fUByP31Acj97xIAbIHX/odUh0t/fdvosWsB5wA2wPvIhDrgJWZQC7ht8M0WUQuYN/jZi6gFRJPB37yIf70A2g9+8iLm+KfglgCWH/zVi7h0x8jOlADuP/iLi7h0h8jONQHD4D8aDPCj4eNsrvVPzZWxzQa2wEJHieywLN3Ym+g9DmmRnYW6uymf55dcRGSncW8359TCEouI7DTq7Oae01lqEZGdTINfYhGRnYyDb7mIyA7wnXXwDRZxjJX8leFnqy9QGn7B0ztdYh/ZAZ5G/swz1eAnLqJvegwDwxL2w+HoOLwq0g7+zCIOg3vfsOub/tywKIqiKIqiKIoipvMLdbXNejrRWysAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export default TabBookmarkActive;
