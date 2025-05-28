// External Libraries
import { useTheme } from 'styled-components/native';

// Styles
import { RNTextInput } from './styles';

const TextInput = () => {
  const theme = useTheme();
  return (
    <RNTextInput placeholderTextColor={theme.colors.gray} placeholder="Hello world" />
  );
};

export default TextInput;
