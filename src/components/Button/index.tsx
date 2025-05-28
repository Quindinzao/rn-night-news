// Interface
import { ButtonProps } from '../../interfaces/ButtonProps';

// Styles
import { RNButton } from './styles';

const Button = (props: ButtonProps): React.JSX.Element => {
  return (
    <RNButton typeButton={props.typeButton} onPress={props.onPress} activeOpacity={0.7}>
      {props.children}
    </RNButton>
  );
};

export default Button;
