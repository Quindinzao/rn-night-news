
// External Libraries
import { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';

// Components
import ItemCard from '../../components/ItemCard';
import ListFooterComponent from '../../components/ListFooterComponent';
import ListEmptyComponent from '../../components/ListEmptyComponent';

// Contexts
import { useNewsContext } from '../../contexts/NewsContext';

// Interfaces
import { ItemCardProps } from '../../interfaces/ItemCardProps';
import { DataProps } from '../../interfaces/DataProps';

// Styles
import {
  Container,
  HomeFlatList,
  Separator,
} from './styles';
import ListHeaderHomeComponent from '../../components/ListHeaderHomeComponent';

const Home = (): React.JSX.Element => {
  const flatListRef = useRef<FlatList>(null);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  const [byCategory, setByCategory] = useState<DataProps[]>();
  const [everything, setEverything] = useState<DataProps[]>();
  const { byCategoryLoader, everythingLoader } = useNewsContext();

  const separator = () => <Separator />;
  const renderItemCard = (item: ItemCardProps, index: number) => {
    return (
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
  };

  useEffect(() => {
    setByCategory(byCategoryLoader.news);
    setEverything(everythingLoader.news);
  }, [
    byCategoryLoader.news,
    everythingLoader.news,
  ]);

  const onScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setCurrentOffset(offsetY);
  };

  const onEndReached = () => {
    if (!everythingLoader.isLoadingMore) {
      everythingLoader.loadMore();
      scrollToOffset();
    }
  };

  const scrollToOffset = () => {
    if (flatListRef.current) {
      const newOffset = Math.max(currentOffset - currentOffset * 0.0001, 0);
      flatListRef.current.scrollToOffset({ offset: newOffset, animated: true });
    }
  };

  return (
    <Container>
      <HomeFlatList
        ref={flatListRef}
        data={everything}
        renderItem={({ item, index } : {item: any, index: number}) =>
          renderItemCard({
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
          }, index)
        }
        onScroll={onScroll}
        scrollEventThrottle={16}
        ItemSeparatorComponent={separator}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={
          <ListHeaderHomeComponent
            renderItemCard={renderItemCard}
            list={byCategory ? byCategory : []}
          />
        }
        ListEmptyComponent={ListEmptyComponent}
      />
    </Container>
  );
};

export default Home;
