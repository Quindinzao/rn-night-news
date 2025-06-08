// Components
import Text from '../Text';

// Interfaces
import { HeaderProps } from '../../interfaces/HeaderProps';

// Styles
import { RNHeader, ImageHeader, StyledLogo, TouchableReturn, TouchableSave } from './styles';
import Return from '../../assets/svg/Return';
import { useNavigation } from '@react-navigation/native';
import YellowBookmark from '../../assets/svg/YellowBookmark';
import YellowBookmarkActive from '../../assets/svg/YellowBookmarkActive';

const Header = (props: HeaderProps): React.JSX.Element => {
  const navigation = useNavigation();
  return (
    <RNHeader>
      <ImageHeader source={props.imageStr} />
      <StyledLogo />
      <Text textType="titleLarge">{props.title}</Text>
      {props.isBack &&
        <TouchableReturn onPress={() => navigation.goBack()} activeOpacity={0.6}>
          <Return />
        </TouchableReturn>
      }
      {props.showIsSaved &&
        <TouchableSave activeOpacity={0.6}>
          {props.isSaved ? <YellowBookmarkActive /> : <YellowBookmark />}
        </TouchableSave>
      }
    </RNHeader>
  );
};

export default Header;
