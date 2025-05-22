import Text from '../Text';
import { RNButton } from './styles';

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
}

const Button = ({onPress, children}: ButtonProps): React.JSX.Element => {
  return (
    <RNButton onPress={onPress} activeOpacity={0.7}>
      <Text type="bodyMedium">{children}</Text>
    </RNButton>
  );
};

export default Button;
