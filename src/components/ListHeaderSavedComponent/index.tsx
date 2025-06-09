// Components
import Header from '../Header';
import TextField from '../TextField';

// Interfaces
import { ListHeaderSavedComponentProps } from '../../interfaces/ListHeaderSavedComponent';

// Styles
import {
  Row,
  TextVariant,
} from './styles';

const ListHeaderSavedComponent = (props: ListHeaderSavedComponentProps) => {
  return (
    <>
      <Header
        title={'News for your\nMind'}
        imageStr={require('../../assets/images/imgScreen3.png')}
      />
      <Row>
        <TextField
          placeholder="Search for keywords"
          value={props.searchText}
          onChangeText={text => props.setSearchText(text)}
        />
      </Row>
      <TextVariant textType="titleSmall">Saved</TextVariant>
    </>
  );
};

export default ListHeaderSavedComponent;
