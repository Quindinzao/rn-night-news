/* eslint-disable react/no-unstable-nested-components */
// External Libraries
import { useEffect, useRef, useState } from 'react';

// Components
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import SelectableBox from '../../components/SelectableBox';
import ModalCategories from '../../components/ModalCategories';

// Interfaces
import { ItemCardProps } from '../../interfaces/ItemCardProps';

// Constants
import { newsCategories } from '../../constants/categories';

// Styles
import {
  Container,
  Row,
  SearchFlatList,
  ItemCardScrollView,
  Separator,
  TextVariant,
  CategoryScrollView,
} from './styles';

// Assets
import Filter from '../../assets/svg/Filter';
import { ActivityIndicator, FlatList } from 'react-native';
import { DataProps } from '../../interfaces/DataProps';
import { useNewsContext } from '../../contexts/NewsContext';
import { useTheme } from 'styled-components/native';

const SearchList = (): React.JSX.Element => {
  const [categorySelected, setCategorySelected] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const flatListRef = useRef<FlatList>(null);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [headlines, setHeadlines] = useState<DataProps[]>();
  const [everything, setEverything] = useState<DataProps[]>();
  const { headlinesLoader, everythingLoader } = useNewsContext();
  const theme = useTheme();
  const openModal = () => setIsModalVisible(true);

  const handleCategoryPress = (category: string) => {
    if (categorySelected === category) {
      setCategorySelected('');
    } else {
      setCategorySelected(category);
    }
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
        id={index}
        author={item.author}
        content={item.content}
        url={item.url}
      />
    );
  };

  useEffect(() => {
    setHeadlines(headlinesLoader.news);
    setEverything(everythingLoader.news);
  }, [
    headlinesLoader.news,
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

  const ListFooterComponent = () => {
    if (everythingLoader.error) {
      setError(everythingLoader.error);
    }
    return everythingLoader.isLoadingMore && (
      <ActivityIndicator size="large" color={theme.colors.primaryColor} />
    );
  };

  return (
    <Container>
      <SearchFlatList
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
          <>
            <Header
              title={'News for your\nBoredom'}
              imageStr={require('../../assets/images/imgScreen2.png')}
            />
            <Row>
              <TextField placeholder="Search for keywords" />
              <Button typeButton="icon" onPress={openModal}>
                <Filter />
              </Button>
            </Row>
            <CategoryScrollView>
              {categorySelected !== '' &&
                <SelectableBox
                  label={categorySelected}
                  onToggle={handleCategoryPress}
                  categorySelected={categorySelected}
                />
              }
            </CategoryScrollView>
            <TextVariant textType="titleSmall">Breaking news</TextVariant>
            <ItemCardScrollView>
              {headlines && headlines.map((item, index) =>
                renderItemCard({
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
            <TextVariant textType="titleSmall">News</TextVariant>
        </>
        }
      />
      <ModalCategories
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleCategoryPress={handleCategoryPress}
        newsCategories={newsCategories}
        categorySelected={categorySelected}
      />

    </Container>
  );
};

export default SearchList;
