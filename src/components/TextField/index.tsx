// External Libraries
import { useTheme } from 'styled-components/native';

// Styles
import { RNTextField } from './styles';
import Search from '../../assets/svg/Search';

const TextField = () => {
  const theme = useTheme();
  return (
    <RNTextField placeholderTextColor={theme.colors.placeholder} placeholder="Hello world">
      <Search />
    </RNTextField>
  );
};

export default TextField;
