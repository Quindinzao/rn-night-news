// External Libraries
import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';

const YellowBookmarkActive = (props: SvgProps) => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    {...props}
  >
    <Rect width={28} height={28} fill="url(#pattern0_61_341)" />
    <Defs>
      <Pattern
        id="pattern0_61_341"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_61_341" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_61_341"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAypJREFUeF7tnT9rU2EYxc976yrWgl4E3ercrXRvUQc3UaRN8Eu49A+UTp2KH0KDgv0CBRUXEZxcBd0q1g4t1LHJfSXVpSVNc8i5eW9zT7aQk/M++f3uE0KWG+BHUgIh6ek+HBaQ+CKwAAtITCDx8d4AC0hMIPHx3oBxFPDzNe5kBV6EiHsh4GrizzjU8THiD4B3ExHLN5r4NlRZjzfLN6AL/0qBrwCm1MMm7js4jpi53cCucg65gF8tbGfAI+WQlemKeJs38EQ5j1zA3iscXfavnT6Aj/IlXKu0gN8tROWAVevKl7T/Hsg3wAK4S8YCOF7wBpDA1HELUBMl+yyABKaOW4CaKNlnASQwddwC1ETJPgsgganjFqAmSvZZAAlMHbcANVGyzwJIYOq4BaiJkn0WQAJTxy1ATZTsswASmDpuAWqiZJ8FkMDUcQtQEyX7LIAEpo5bgJoo2WcBJDB13ALURMk+CyCBqeMWoCZK9lkACUwdtwA1UbLPAkhg6rgFqImSfRZAAlPHLUBNlOyzABKYOm4BaqJknwWQwNRxC1ATJfssgASmjluAmijZZwEkMHXcAtREyT4LIIGp4xagJkr2WQAJTB23ADVRss8CSGDquAWoiZJ9FkACU8ctQE2U7LMAEpg6bgFqomSfBZDA1HELUBMl+yyABKaOW4CaKNlnASQwddwC1ETJPgsgganjFqAmSvZZAAlMHbcANVGyzwJIYOq4BaiJkn0WQAJTxy3gNNGd/0/vq0Gf12cB/8h8Kgqs3WriY/fJ3hvMZR2sRuBh2SLqLuAU+LOwRyGirgL6gh+liLoJoMCPQkRdBAwFvkwR4y5ACr4MEeMqoFTwShGXQcAhgMkBfw6OFPzQIiIO84b2Fo3y21gNeCvDHbSxkT/D5wFFlRrr/nyNbaxnAQ/6HhSwnS/isXIYuYD9l5iOAV8QcL3HoJUC32sj+og4wARm86f4UWkB3eH2W7jbATYzYB4RsQj4kLWxVZUr/iKAJxvRwfMQsRACOoh4HyJWbjbx/aL3sq/LN4AdoO55C0h8BViABSQmkPh4b4AFJCaQ+HhvgAUkJpD4+L/Nm3FwwHBtSgAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default YellowBookmarkActive;
