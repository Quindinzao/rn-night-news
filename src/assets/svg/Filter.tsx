import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';

const Filter = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="url(#pattern0_61_333)" />
    <Defs>
      <Pattern
        id="pattern0_61_333"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_61_333" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_61_333"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACxElEQVR4nO2dvYoUQRSFC43EF3BBA/8QTEzXzMxE38JgwVdxfQyV2UUDBX0AaXr6nC7mFQRBFHZ0J1VoGRgDg3Vqtu269XM+6HCGe+urW3WHvss6J4QQQgghhBBCCCHEP+i67hrJY5IrkkPlz4rkm67r7sRc/JMEEh9SegAs12szuYDNzjdPmGk+sxgCdOzwTAGnMQRY77Ih5UcCKAHmu5CqAPuFYK1HkCscWudvHoAx5vkHlOGeKxSSezkI6BeLxWVXGE3TXCLZmgsA8DVAwrvZbHbRFcIwDBcAvA7I+8vkwQB4FdgRHLpCIHkYmPOLyYNp2/b6+id3SEAADlzmADgIXPzT9dpECYrkQ5I/A4L6RfKRyxTukGff949jB/ckcGesvPf3XGZ47+8C+B6Y41OTIEk+DzyKPrdte9Vlwnw+v0LyU/J33Q7dQTbtaRPYbibT7WUXcIkbavMLMbRkn7nM202keKSuLy2SP5K+tEpvKpJu2wqMu4id5DOv3KzPUhZyd2XZTTQFdW/ZJThksEGKLnFmckQWeckxsyahqDaPicRhgvXO84lVoglWZy8TvYuiY9F9NAl3YybEXJChlnYz1RceLPSFURav/Fhju5lKW8hKhgaSHPtoKxubiT349HLbd9U4ODaaIbBbAfBt23fVODqZ1PAr1W7ajn+z4vH5/wInFhAni4yhBEhA1VAVIAFVQ1WABFQNVQESUDVUBUhA1VAVIAFVQ1WABFQNVQESUDVUBUhA1XD7O939MZ+Pl0mmMGym5yOAB+f5fPyMyhQwnCVCAkYCYLmjhL9ESMBISB6dQ8Cfybn3EjAS7/3tKf9BxNj4qqDruhshu1kCJobkPoC3ElCQCCdsRThhWxFO2IkAsNT6T0Df9/cBfAiQcCQBdiJOSN6UgEgiSB6vj5zN3yLP+r6/pcUXQgghhBBCuAT4De1i/GExQg0DAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);

export default Filter;
