// External Libraries
import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';

const TabHome = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="url(#pattern0_61_305)" />
    <Defs>
      <Pattern
        id="pattern0_61_305"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_61_305" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_61_305"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEPElEQVR4nO2cv2tUQRDH1/gL/FGIiihqoxK1UMPbvYCJBDTeTszldu7gWVpqaWfp2fgH2Pij1coQtLDyB4Kdjdpoo40gFkIiRvyFYiJjAnJRzLt972XevpsPbBPC3sx8Z2d39t07pQRBEARBEIRA6IexAxrcuLb43oD7YAAn6G/cdpWewdHRDRrcJQ34wwDOtg3rfhrA64cg3sxtZ/lotXoqI/VTGty7vwK/YNCq0BbPxnG8nNvsUqChYYzFx4sF/h9CPIsAB7ntD5bINrZSSTGAM50Gv00IcHei4dpObn+CIYpOr6QSoi1Opwl8+/6An411F3YDrOb2r9AYcMe0xReZBf7v8cpUscbtZ+GIAHfRsTLHwC8c9/tP4D7V7Rw4fnytAbxoLH7zqu/WvaHhWZboMy+SDaob0eDGjHWv/TLYfad+4HC9vj6q1dZQfdfgvnquhrd0xFVKLVPdQFRt7jXg7mVdPqKUZUxbfFSpNg6qruxiIdkGWrGN0Vw38lJ20x10sebf41OnR8i0R9nSdNO+XayZGzNUUtI0Ub+bOYvX5jPbR4hnFeuOqK7rYi0+zfIaIWUihNNNp1764KZyW/ppS2HRu+lQNr/BDA4DheqmQz3+RdXmXm3d3WC76bI0QDqjhlCM7oZkyquLLQqFLadpNy4N7mWSLrZQBwrA5/wHilarJ7LujAY36ZkRHyvWndsfx6tUYOyP41VkO/ngmXSTFDuKoZ8BQ/E6DfjQcznOGOtu9A3Xt6nA6RuubyNffJtKbfGB15X37xbe72TwJBppDqiSEY00B8g3PxHc5c47Ws8TgfeSC4FWq8dTgC9DQ0MrEn9O/9GxLZ6lZ1aVHOMZF4pp4g+hu5i5r/2JAAvx3JCnOq4MGrAlAmQlAJ5XnUI1ywBebdv96UZQStDsf2PQHiN6pnEl1e1u/3BzD7XZxuJJcww3igD4XwGiWm0TxYpi1lcd262yRgRA3kOICIAiACfsCchuADPs/rMbwAy7/+wGMMPuP7sBzLD7z24AM+z+sxvADLv/7AYww+4/uwHMsPufhQG66nbQ2+06wfNW+h9t8Za29d6kNuY5f/ACUHDofnyxeczCQIGbqkBjO/f8wQtAmdlpcMyfII0XYP6wBfD9moeZKxfT3PMHL4BvcEwg86u8CT1ARgQQAVIReoYaWQEiQCpCz1AjK0AESEXoGWpkBeQbIJ2iEaNfYMw7AVNT9AzVFm+lmH8ib/+7QIB6r+9lHH0LMG//Sy8AQbea8z/suugb+/P/M5Ek+IQIwIwIwIwIwIwIwIwIwIwIwIwIwIwIwIwIwIwIwIwIwIwIwEzhBej2oUQAFAG4s9DICuAPhClrCUr3zLXsw31YCgFu8zuKhRwa3M0lEKDe6/tjTmUeGtxkkhc8shFh7i2URM9cyz60xWnK/CULviAIgiAIgiAIgiAIgqBC5ReIU05r/yWlgQAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default TabHome;
