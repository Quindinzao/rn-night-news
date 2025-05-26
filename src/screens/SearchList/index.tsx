import { Container, SearchFlatList, SearchListScrollView, Separator, TextVariant } from './styles';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import { ItemCardProps } from '../../interfaces/ItemCardProps';
import TextInput from '../../components/TextInput';

const SearchList = (): React.JSX.Element => {
  const defaultList = [0, 1, 2, 3, 4, 5];

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
            <TextInput />
            <TextVariant textType="titleSmall">Favorites categories</TextVariant>
            <SearchListScrollView>
              {defaultList.map(() => renderItemCard({
                itemCardType: 'horizontalList',
                urlToImage: 'https://gizmodo.com/app/uploads/2024/12/Tile.jpg',
                title: 'Tile’s 4-Pack Bluetooth Trackers Now Beat Apple’s AirTags on Price and Function, Shape Variety Included',
                description: 'For a limited time, you can get this four-pack of Tile trackers at all-time low price on Amazon.',
                sourceName: 'Gizmodo.com',
                publishedAt: '2025-05-21T12:14:49Z',
                isFavorite: false,
              }))}
            </SearchListScrollView>
            <TextVariant textType="titleSmall">News</TextVariant>
        </>
        }
      />
    </Container>
  );
};

export default SearchList;
