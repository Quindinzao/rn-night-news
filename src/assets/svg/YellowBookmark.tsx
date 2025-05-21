import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';

const YellowBookmark = (props: SvgProps) => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    {...props}
  >
    <Rect width={28} height={28} fill="url(#pattern0_61_346)" />
    <Defs>
      <Pattern
        id="pattern0_61_346"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_61_346" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_61_346"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACYElEQVR4nO2dTUoDQRhE6yKuFLyC7jyrmSHgDy5cmAN4FMEuxIheQGnITiKJ0zPzveQrGHARwntVSQcMZKRMJpPJZDKZTCaTaZCXpU5Kp7vS68u9vslXqQ6dHt4WOseU707vcxfn9kOsq5uip77y5y7L441wo+g5hGPH2wf4VPTMXZJHvhQ9cxfkHGD+kpzvgPmLch5BzDPUh/4ZoOAxnB8vYDg/XsBwfryA4fx4AcP58QKG8+MFDOfHCxjOjxcwnB8vYDg/XsBwfryA4fx4AcP58QKG8+MFDOfHCxjOjxcwnB8vYDg/XsBwfryA4fx4AcP58QKG8+MFDOfHCxjOjxcwnB8vYDg/XsBwfryA4fx4AcP58QKG8+MFDOfHCxjOjxcwnB8vYDg/XsBwfryA4fx4AcP58QKG8+MFDOfHCxjOjxcwnB8vYDg/XsBwfryA4fx4AcP58QKG8+MFDOfHCxjOjxcwnB8vYDg/XsBw/kkESq/L0uu+/pDq5qp/X7Z47hzgj5SFLtzrcVtJpdfz60JXGpAc4B/FtxwiBxhQfIshcgANL37IEEc9QGlc/H+GOMoBysjF7zPEUQ1QJi5+lyGOYoBafOn0NLjATk/Nnmehi135Q2cX2ZaFtR704AdofWRMfaQpeuYofsohFD1zFj/FEIqeCMWPOYSiJ1LxYwyh6IlYfMshFD2l10fU4hv8l3WtQ7iVYem0avUFSrMveDqtdhjgVtHja51tu5lntOL3GqI6LXUqQuoI9dVSj6P6tt3c2jZs8VuGqMzrjcNNdfr1wEwmk8lkMplMJpPR/vkBO/+kULHkgpsAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);

export default YellowBookmark;
