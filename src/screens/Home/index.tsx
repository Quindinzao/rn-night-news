/* eslint-disable react/no-unstable-nested-components */
// External Libraries
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';

// Components
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';

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
  TextVariant,
} from './styles';

const Home = (): React.JSX.Element => {
  const flatListRef = useRef<FlatList>(null);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  const [byCategory, setByCategory] = useState<DataProps[]>();
  const [everything, setEverything] = useState<DataProps[]>();
  const { byCategoryLoader, everythingLoader } = useNewsContext();

  const theme = useTheme();
  const WIDTH_SCREEN = Dimensions.get('screen').width;
  const progress = useSharedValue<number>(0);
	const baseOptions = {
		vertical: false,
		width: WIDTH_SCREEN,
    height: 405,
    marginLeft: 16,
    marginRight: 16,
    alignItem: 'center',
    justifyContent: 'center',
	} as const;

  const paginationBasicStyle = {
    dotStyle: {
      marginTop: -38,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.gray,
      borderStyle: 'solid' as 'solid',
      width: 12,
      height: 12,
    },
    activeDotStyle: {
      backgroundColor: theme.colors.gray,
    },
    containerStyle: {
      gap: 16,
      borderRadius: 12,
    },
  };

  const ref = useRef<ICarouselInstance>(null);
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({ index });
	};

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
      scrollToOffset(); // sem passar valor fixo
    }
  };

  const scrollToOffset = () => {
    if (flatListRef.current) {
      const newOffset = Math.max(currentOffset - currentOffset * 0.0001, 0);
      flatListRef.current.scrollToOffset({ offset: newOffset, animated: true });
    }
  };

  const ListFooterComponent = () => {
    if (everythingLoader.error) {
      console.error('Oops: ', everythingLoader.error);
    }
    return everythingLoader.isLoadingMore && (
      <ActivityIndicator size="large" color={theme.colors.primaryColor} />
    );
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
          <>
            <Header
              title={'News for your\nInsomnia'}
              imageStr={require('../../assets/images/imgScreen1.png')}
            />
            <TextVariant textType="titleSmall">Favorite category</TextVariant>
            {byCategory && byCategory.length > 0 &&
            <>
              <Carousel
                ref={ref}
                {...baseOptions}
                loop
                onProgressChange={progress}
                data={byCategory}
                renderItem={({ item, index }) =>
                  renderItemCard({
                    itemCardType: 'carousel',
                    urlToImage: item.urlToImage,
                    title: item.title,
                    description: item.description,
                    sourceName: item.sourceName,
                    publishedAt: item.publishedAt,
                    isFavorite: false,
                  }, index)
                }
              />
              <Pagination.Basic
                {...paginationBasicStyle}
                progress={progress}
                data={byCategory}
                onPress={onPressPagination}
              />
            </>
            }
            <TextVariant textType="titleSmall">News</TextVariant>
        </>
        }
      />
    </Container>
  );
};

export default Home;
