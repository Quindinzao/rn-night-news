import {
  Container,
  Row,
  SearchFlatList,
  ItemCardScrollView,
  Separator,
  TextVariant,
  CategoryScrollView,
  ModalContent,
  CloseButton,
  CategoriesMosaic,
} from './styles';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import { ItemCardProps } from '../../interfaces/ItemCardProps';
import Button from '../../components/Button';
import Filter from '../../assets/svg/Filter';
import TextInput from '../../components/TextInput';
import SelectableBox from '../../components/SelectableBox';
import React, { useState } from 'react';
import { Modal } from 'react-native';
import Close from '../../assets/svg/Close';
import Text from '../../components/Text';

const SearchList = (): React.JSX.Element => {
  const defaultList = [0, 1, 2, 3, 4, 5];
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([
    'World',
    'Politics',
    'Business',
    'Technology',
    'Science',
    'Health',
    'Travel',
    'Crime',
    'Economy']);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const handleCategoryPress = (category: string) => {
    if (categoriesSelected.includes(category)) {
      setCategoriesSelected(categoriesSelected.filter(item => item !== category));
    } else {
      setCategoriesSelected([...categoriesSelected, category]);
    }
  };

  const newsCategories = [
    'World',
    'Politics',
    'Business',
    'Technology',
    'Science',
    'Health',
    'Travel',
    'Environment',
    'Education',
    'Crime',
    'Economy',
  ];

  const separator = () => <Separator />;
  const renderItemCard = (props: ItemCardProps) => {
    return (
      <ItemCard
        itemCardType={props.itemCardType}
        urlToImage={props.urlToImage}
        title={props.title}
        description={props.description}
        sourceName={props.sourceName}
        publishedAt={props.publishedAt}
        isFavorite={props.isFavorite}
      />
    );
  };

  return (
    <Container>
      <SearchFlatList
        data={defaultList}
        renderItem={() => renderItemCard({
          itemCardType: 'verticalList',
          urlToImage: 'https://gizmodo.com/app/uploads/2024/12/Tile.jpg',
          title: 'Tile’s 4-Pack Bluetooth Trackers Now Beat Apple’s AirTags on Price and Function, Shape Variety Included',
          description: 'For a limited time, you can get this four-pack of Tile trackers at all-time low price on Amazon.',
          sourceName: 'Gizmodo.com',
          publishedAt: '2025-05-21T12:14:49Z',
          isFavorite: false,
        })}
        ItemSeparatorComponent={separator}
        ListHeaderComponent={
          <>
            <Header
              title={'News for your\nInsomnia'}
              imageStr={require('../../assets/images/imgScreen2.png')}
            />
            <Row>
              <TextInput />
              <Button typeButton="icon" onPress={openModal}>
                <Filter />
              </Button>
            </Row>
            <CategoryScrollView>
              {categoriesSelected.map((item, index) => {
                return <SelectableBox key={index} label={item} onToggle={handleCategoryPress} categoriesSelected={categoriesSelected} />;
              })}
            </CategoryScrollView>
            <TextVariant textType="titleSmall">Favorites categories</TextVariant>
            <ItemCardScrollView>
              {defaultList.map(() => renderItemCard({
                itemCardType: 'horizontalList',
                urlToImage: 'https://gizmodo.com/app/uploads/2024/12/Tile.jpg',
                title: 'Tile’s 4-Pack Bluetooth Trackers Now Beat Apple’s AirTags on Price and Function, Shape Variety Included',
                description: 'For a limited time, you can get this four-pack of Tile trackers at all-time low price on Amazon.',
                sourceName: 'Gizmodo.com',
                publishedAt: '2025-05-21T12:14:49Z',
                isFavorite: false,
              }))}
            </ItemCardScrollView>
            <TextVariant textType="titleSmall">News</TextVariant>
        </>
        }
      />
      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <ModalContent>
          <Row>
            <Text textType="titleLarge">Filter by categories</Text>
            <CloseButton onPress={closeModal}>
              <Close />
            </CloseButton>
          </Row>
          <CategoriesMosaic>
            {newsCategories.map((item, index) => {
              return <SelectableBox key={index} label={item} onToggle={handleCategoryPress} categoriesSelected={categoriesSelected} />;
            })}
          </CategoriesMosaic>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default SearchList;
