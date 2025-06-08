// External Libraries
import { useTheme } from 'styled-components/native';

// Styles
import { RNTextField } from './styles';
import { TextInputProps } from 'react-native';
// import Search from '../../assets/svg/Search';

const TextField = ({...rest}: TextInputProps) => {
  const theme = useTheme();
  return (
    <RNTextField placeholderTextColor={theme.colors.placeholder} {...rest} />
  );
};

export default TextField;
