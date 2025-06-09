// External Libraries
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

// Styles
import { RNTextField } from './styles';

const TextField = ({...rest}: TextInputProps) => {
  const theme = useTheme();
  return (
    <RNTextField placeholderTextColor={theme.colors.placeholder} {...rest} />
  );
};

export default TextField;
