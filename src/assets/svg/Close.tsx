import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';
const Close = (props: SvgProps) => (
  <Svg
    width={42}
    height={42}
    viewBox="0 0 42 42"
    fill="none"
    {...props}
  >
    <Rect width={42} height={42} fill="url(#pattern0_319_199)" />
    <Defs>
      <Pattern
        id="pattern0_319_199"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_319_199" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_319_199"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADHUlEQVR4nO2cv48MYRyHX4JEhAgJoaDx60gohEQlSBRK8Q+gUuopNGp/gEShEyoammsuezvz+XznJrH0sndO0Dg5NIwMuwW5H7uzd3m/s/N5kql33ueZd3ZmMvOGIIQQQgghhBBCCCGEEEIIIYSoQJIku0luHgd5rVZrV1EUG4J3SB4A8AjAV5IFgB8AnqVpejTUDJL7SD4kuVCOheR3kk/cjiVJkhMk53s7+//2heSFUBPM7CSAuWXGsmBm54IniqLYSDJZZof72yLJi6EG8kl+WmUs7zqdzpbgBQBnV9nhWkSwweT/2QBcC14geWvAAG4j2BDyewHuBS+Y2fUhAriLYEPK7wW4E7yQZdlhAL/qGMH+/uF+HHLfCw/7/g8kn1YYxGLMgYwgv+3uvmBmZmYnyU5dIlhF+QBmy/ud4JE8z/eQfF0lgpld8nzO723zZjYRPOM9go2zfO8RzGxihbv18ZDvNYI1Sb63CNZE+V4iWJPlx45gkh8vgkl+vJlgkh8vgkl+vAhWXX7XzA6FJrHWEUzy40UwyY83E0zyR2d6enovgDdVIlR8sNa8c/46zoRC8usToasjP16EruTHmwldyY93OupKfrwIXckfEZKXqwZI0/TGqL/faLIsO1XxOj/K2xZjRTa6fEVwIL/QTIgvv1CE+PILRYgvv1CENZYPYA7A2yoR3L1eXsMj/0OWZcdjv3fUaPmhhyJElN9HESLK76MI6yt/fiX5irDO8m2IF2U1EyLK76MIDj4LynWJGv+brLzJEWLLb3QEL/IbGcGb/EZFqCofwGy55oTz1yB9P8Azs/0k33uVvwYRypW/jgWvAHjsXf6oEQA8Dx6ZnJzcVC7SVwf5o0QA8DPP823BG+UKInWSP0qEJEmOBG+0Wq2t5dFRJ/lVIpQLU7Xb7R3BIyRf1fUL9HzwS9SXwStpmp5Z6X/A25FfYSZ8Kx8qBs8AuELy8xLyYWYHQw2WKSb5YqmDJ03T86EOTE1NbQdwE8ADAPfLKOXirqFGmNlpALdJ3jWzq64WahVCCCGEEEIIIYQQQgghhBBhYH4Dauw0jkq9F6sAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export default Close;
