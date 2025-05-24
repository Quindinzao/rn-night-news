import Text from '../Text';
import { RNButton } from './styles';
import { ButtonProps } from '../../interfaces/ButtonProps';

const Button = (props: ButtonProps): React.JSX.Element => {
  return (
    <RNButton onPress={props.onPress} activeOpacity={0.7}>
      <Text textType="bodyMedium">{props.children}</Text>
    </RNButton>
  );
};

export default Button;
