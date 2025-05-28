// External Libraries
import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';

const TabHomeActive = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="url(#pattern0_61_313)" />
    <Defs>
      <Pattern
        id="pattern0_61_313"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_61_313" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_61_313"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD0ElEQVR4nO2cvY9OQRSHx66PxFIIsrHZ1bBZGirVUinRKrVKnRKNP0Djo6Wy2VCofESi06ChoZGIQrJkd+NjQ3jkxhSy5J33zpl5z8y950m22bxz7u93zty5c+bdu84ZhmEYhmEYlQAcAhaAT8AysNj8TltX5wF2AFeAH/zLT+AmsFtbZ+cAxoAzwAfCNHfFOWBcW3cnAI4AT2nPC+Cotv5qAfb4JeUXMu4Be7X9VAOwyS8hK6TjC3AJ2KLtr2iA48Ar8vEGOKntsziAfX5bOSoeAgdd3wEmgMvAWmQi3/mfGNb8tSdcHwFOAW8jk/fd9wPbga1+ff8WGeu93+JucH0AOAA8IPHygXwZewIcdj3tYod9gJ7I/CDvXjfdsov9H5/bbiETbGW70U0Lulh8A7YgaaJ8M3fDz2wiu+ljrodd7POUxwjCiVBPN53g1v+Y69ZPsBSW3U3X8vAjzWagnG661u0ff7bD96vtprvSAJGoITTRfZhMubrYUih2OU3w4Ho9TBdb2IbipfqGwm/dzgJLkWJWgfPAZlcZwGavvfEQw5LP3VisgG3A48iLNw3YLWDKVQ4w5b3ENpWPoo68fQsfwzNg3nUMYN57i+FqTEcbuyOIu+UqwC/JMXwFNra50GTkhXAdh3gm21xk3B/JWgHWITjjarcyABetAMkKcMG1pVmzgOvrnv7NieBAXMchzN85anJ3TXS6C8z6Nvs0sNMKEGSXz1WTs/1Jq+8LMhDXcdD2ry5AGXX/6gKUUfevLkAZdf/qApRR968uQBl1/+oClFH3ry5AGXX/6gKUUfevLkAZdf/qApRR959CADDj325fDcXzn7kDzLXQmC1+9QXwyWnOx9vSjJkuIP5AXG6kAvzMjGWhgPgDcbmRChD8mUfDSgHxB+JyIxUgSE4V8V1uchuoPb7LTe0JCpHbv5jcBmqP73JTe4JC5PYvJreB2uO73NSeoBC5/YvJbaD2+C43FSRoVRB+Obd/MQkSJMKF4zcHa7Es5vYvJkGCRLhw/DnBYdxsbv9iEiRIhBtO47R/2W6YN/ZX/AHe7Cj8i5EKGDrTWgaF+osXEBqvblCov3gBwQxrGxTqL15AaLy6QaH+4gUEM6xtUKi/eAGh8eoGhfqLFxDMsLZBof7iBYTGqxsU6i9eQDDD2gaF+osXEBqvblCov3gBwQxrGxTqL15AaLy6QaF+dQF9x1kBdLECKGMF6EEBJN+5dp3lURTgrrbLgrk9igLMxf4zp46zNMwLHqmKMNPiO9eus9LM/JEl3zAMwzAMwzAMwzAMw3C18hsiKn4ubGTHiwAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default TabHomeActive;
