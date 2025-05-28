// External Libraries
import { useTheme } from 'styled-components/native';

// Styles
import { RNTextInput } from './styles';
import Search from '../../assets/svg/Search';

const TextInput = () => {
  const theme = useTheme();
  return (
    <RNTextInput placeholderTextColor={theme.colors.placeholder} placeholder="Hello world">
      <Search />
    </RNTextInput>
  );
};

export default TextInput;
