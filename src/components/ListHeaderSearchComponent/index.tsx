// Components
import Header from '../Header';
import Button from '../Button';
import SelectableBox from '../SelectableBox';

// Interfaces
import { ListHeaderSearchComponentProps } from '../../interfaces/ListHeaderSearchComponent';

// Styles
import {
  Row,
  ItemCardScrollView,
  TextVariant,
  CategoryScrollView,
  TextFieldStyled,
} from './styles';

// Assets
import Filter from '../../assets/svg/Filter';

const ListHeaderSearchComponent = (props: ListHeaderSearchComponentProps) => {
  const openModal = () => props.setIsModalVisible(true);

  return (
    <>
      <Header
        title={'News for your\nBoredom'}
        imageStr={require('../../assets/images/imgScreen2.png')}
      />
      <Row>
        <TextFieldStyled
          placeholder="Search for keywords"
          value={props.searchText}
          onChangeText={text => props.setSearchText(text)}
        />
        <Button typeButton="icon" onPress={openModal}>
          <Filter />
        </Button>
      </Row>
      <CategoryScrollView>
        {props.selectedCategory !== '' &&
          <SelectableBox
            label={props.selectedCategory}
            onToggle={props.handleCategoryPress}
            selectedCategory={props.selectedCategory}
          />
        }
      </CategoryScrollView>
      <TextVariant textType="titleSmall">Breaking news</TextVariant>
      <ItemCardScrollView>
        {props.list && props.list.map((item, index) =>
          props.renderItemCard({
            itemCardType: 'horizontalList',
            urlToImage: item.urlToImage,
            title: item.title,
            description: item.description,
            sourceName: item.sourceName,
            publishedAt: item.publishedAt,
            id: index,
            author: item.author,
            content: item.content,
            url: item.url,
            isFavorite: false,
          }, index)
        )}
      </ItemCardScrollView>
      <TextVariant textType="titleSmall">
        {!props.selectedCategory ? 'News' : `Top 20 news by category "${props.selectedCategory}"`}
      </TextVariant>
    </>
  );
};

export default ListHeaderSearchComponent;
