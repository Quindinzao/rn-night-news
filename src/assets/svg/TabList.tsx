// External Libraries
import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';

const TabList = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="url(#pattern0_61_298)" />
    <Defs>
      <Pattern
        id="pattern0_61_298"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_61_298" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_61_298"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABgElEQVR4nO3bzU7bQBQG0Eh9Gqi6Ird9BE+RwHeT5+zPCngp1LLLZlAiFpFQgiFGM4RzpLuJkpHH156J/MmLBQAAAAAcEMPV1xjy73LIf1Gy7tbTZ3++l+vzOcaLzust8z3Kxc/xW5Tx4eWDGx82351vvOy8ps33aFHGu+lXx3g753jReU2Z71FWq9WXKOP6FVfFevOb+cbLzuvwfDWgfPAGvHoJKnkz53jReU2Z79GmbprLIf9/pk14OXG+s9j85Yoy/o4h758dzJD3yyF//bjMs1nGK53XG+YLAAAAAJPJhHP3KahMOLoomXBt3QSZcGndBJlwPekGbDdgmXDduwTJhLPh+i8Trk1OvkwYAAAAgPckE87dp6Ay4egjjPGecDRugky4NL8LvCccp9yA7QYsE657lyCZcDZc/2XCtcnJlwkDAAAA8J5kwrn7FFQmHH2EMTLhaNwEmXBpfhfIhOOUG7DdgGXCde8SJBPOhuu/TLg2OfkyYQAAAAAAYHHYI1JB+vwuQdD7AAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);
export default TabList;
