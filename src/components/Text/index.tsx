// Interfaces
import { TextProps } from '../../interfaces/TextProps';

// Styles
import { RNText } from './styles';

const Text = ({textType, children, ...rest}: TextProps): React.JSX.Element => {
  return (
    <RNText textType={textType} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
