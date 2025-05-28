// External Libraries
import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';

const TabListActive = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="url(#pattern0_61_302)" />
    <Defs>
      <Pattern
        id="pattern0_61_302"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_61_302" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_61_302"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABD0lEQVR4nO3ZzUrDQBSG4UKvxkqv3Z+V9abEunPzScBNUGKiU88Rn2cZwmEmA5nFu9sBAAAAwIIk10nukzzno+nZXZLDoHndbd7vjyQ5JnlZsbDpnePAed2t2u+IA3jcsKjT4HndnS798fdJXjcsaHp3P3Bed4v7dQB//QC+8ct4GDyvuy/3O+IA1l6a5392CZ9/5RJ+/2iHJLdJnj5ZyPTsJsnVoHndbd4vAAAAAKymCc9owk1owg1owsU04WKacDFNuJAmXEQTBgAAAOByNOEZTbgJTbgBTbiYJlxMEy6mCRfShItowgAAAABcjiY8owk3oQk3oAkX04SLacLFNOFCmnARTRgAAAAAANgteQO6cnbi+eyItAAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default TabListActive;
