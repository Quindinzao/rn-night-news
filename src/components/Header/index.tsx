// Components
import Text from '../Text';

// Interfaces
import { HeaderProps } from '../../interfaces/HeaderProps';

// Styles
import { RNHeader, ImageHeader, StyledLogo } from './styles';

const Header = (props: HeaderProps): React.JSX.Element => {
  return (
    <RNHeader>
      <ImageHeader source={props.imageStr} />
      <StyledLogo />
      <Text textType="titleLarge">{props.title}</Text>
    </RNHeader>
  );
};

export default Header;
