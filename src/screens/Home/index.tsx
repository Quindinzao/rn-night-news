// External Libraries
import {useEffect, useRef, useState} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

// Components
import ItemCard from '../../components/ItemCard';
import ListFooterComponent from '../../components/ListFooterComponent';
import ListEmptyComponent from '../../components/ListEmptyComponent';
import ListHeaderHomeComponent from '../../components/ListHeaderHomeComponent';

// Contexts
import {useNewsContext} from '../../contexts/NewsContext';

// Interfaces
import {ItemCardProps} from '../../interfaces/ItemCardProps';
import {DataProps} from '../../interfaces/DataProps';

// Styles
import {Container, HomeFlatList, Separator} from './styles';

const Home = (): React.JSX.Element => {
  const flatListRef = useRef<FlatList>(null);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  const [byCategory, setByCategory] = useState<DataProps[]>([]);
  const [everything, setEverything] = useState<DataProps[]>([]);
  const {byCategoryLoader, everythingLoader} = useNewsContext();

  const separator = () => <Separator />;

  const renderItemCard = (item: ItemCardProps, index: number) => (
    <ItemCard
      key={index}
      itemCardType={item.itemCardType}
      urlToImage={item.urlToImage}
      title={item.title}
      description={item.description}
      sourceName={item.sourceName}
      publishedAt={item.publishedAt}
      isFavorite={item.isFavorite}
      id={index}
      author={item.author}
      content={item.content}
      url={item.url}
    />
  );

  useEffect(() => {
    setByCategory(byCategoryLoader.news);
    setEverything(everythingLoader.news);
  }, [byCategoryLoader.news, everythingLoader.news]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setCurrentOffset(offsetY);
  };

  const handleEndReached = () => {
    if (everything.length === 0) {
      return;
    }

    if (!everythingLoader.isLoadingMore) {
      everythingLoader.loadMore();
      scrollToOffset();
    }
  };

  const scrollToOffset = () => {
    if (flatListRef.current) {
      const newOffset = Math.max(currentOffset - currentOffset * 0.0001, 0);
      flatListRef.current.scrollToOffset({offset: newOffset, animated: true});
    }
  };

  return (
    <Container>
      <HomeFlatList
        ref={flatListRef}
        data={everything}
        renderItem={({item, index}: {item: any; index: number}) =>
          renderItemCard(
            {
              itemCardType: 'verticalList',
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
            },
            index,
          )
        }
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ItemSeparatorComponent={separator}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.4}
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={
          <ListHeaderHomeComponent
            renderItemCard={renderItemCard}
            list={byCategory}
          />
        }
        ListEmptyComponent={ListEmptyComponent}
      />
    </Container>
  );
};

export default Home;
