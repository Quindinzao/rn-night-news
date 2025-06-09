// External Libraries
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import Text from '../Text';

// Interfaces
import { HeaderProps } from '../../interfaces/HeaderProps';

// Assets
import YellowBookmark from '../../assets/svg/YellowBookmark';
import YellowBookmarkActive from '../../assets/svg/YellowBookmarkActive';

// Styles
import {
  RNHeader,
  ImageHeader,
  StyledLogo,
  TouchableReturn,
  TouchableSave,
  Shadow,
} from './styles';

const Header = (props: HeaderProps): React.JSX.Element => {
  const navigation = useNavigation();

  return (
    <RNHeader>
      <ImageHeader source={props.imageStr} />
      {props.isBack && <Shadow colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.7)']} />}
      <StyledLogo />
      <Text textType="titleLarge">{props.title}</Text>
      {props.isBack &&
        <TouchableReturn onPress={() => navigation.goBack()} activeOpacity={0.6}>
          <Image source={require('../../assets/images/imgReturn.png')} />
        </TouchableReturn>
      }
      {
        props.isBack &&
        props.isSaved !== undefined &&
        props.onToggle !== undefined &&

        <TouchableSave activeOpacity={0.6} onPress={props.onToggle}>
          {props.isSaved ? <YellowBookmarkActive /> : <YellowBookmark />}
        </TouchableSave>
      }
    </RNHeader>
  );
};

export default Header;
