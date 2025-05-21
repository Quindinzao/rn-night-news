import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';

const TabBookmark = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="url(#pattern0_61_299)" />
    <Defs>
      <Pattern
        id="pattern0_61_299"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_61_299" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_61_299"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACcElEQVR4nO2dQUrDUBRF30YcKTiW5hadOWr+RPPdZlUcONAFuB0V3YDyizMtts1P8k77LgREJJxzbxIHhcYsEolEIpFIJBKJRCqkWXRHSvmuafOnUv4iH02bP5s2PzTt9Smm/CZ1r1MXp/pDvBU3855y5U9dloYaIXVL8559eOxo/V3wYd4zdUka+DDvmbogxQDTl6S4A6YvSvEIYj5Dte//A8x5BOfHCwjOjxcQnB8vIDg/XkBwfryA4Px4AcH58QKC8+MFBOfHCwjOjxcQnB8vIDg/XkBwfryA4Px4AcH58QKC8+MFBOfHCwjOjxcQnB8vIDg/XkBwfryA4Px4AcH58QKC8+MFBOfHCwjOjxcQnB8vIDg/XkBwfryA4Px4AcH58QKC8+MFBOfHCwjOjxcQnB8vIDg/XkBwfryA4Px4AcH58QKC8+MFBOfHCwjOjxcQnB8vIDg/XkBwfryA4Px4AcH58QKC8+MFBOfHCwjOjxcQnH8UAbX5Qqm7L1+kWo7yc/ldlXPHAOszTzfnTeoe15bUdi+ztru0HokBdim+4hAxQJ/iKwwRA1iF4nsMcdADzGsXv8MQBznAfOjitxjioAaYj138BkMcxAA/xT/1LbCco9Z5CtOm/K6ziWzNwmoPuvcD1H5kjP1IM++ZovgxhzDvmbL4MYYw7/FQ/JBDmPd4Kn6IIcx7PBZfcwjzHrX53WvxfYcorzO0fXiVYZPyc60PUGqksKyY/r1g8q15z9ni6mTdyzy9Fb/NEMVplvKxEVJGKFdLeRyV23Z1Vzgu/u+PPFev431bOaRuWZx+/WEkEolEIpFIJBKJ2Pb5Bitixj+bZgDZAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);

export default TabBookmark;
