/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
// External Libraries
import { useEffect, useRef, useState } from 'react';

// Components
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import Button from '../../components/Button';
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
  TextFieldStyled,
} from './styles';

// Assets
import Filter from '../../assets/svg/Filter';
import { ActivityIndicator, Alert, FlatList } from 'react-native';
import { DataProps } from '../../interfaces/DataProps';
import { useNewsContext } from '../../contexts/NewsContext';
import { useTheme } from 'styled-components/native';
import { api } from '../../services/newsApi';
import { API_KEY } from '@env';
import Error from '../../components/Error';

const SearchList = (): React.JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const flatListRef = useRef<FlatList>(null);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [headlines, setHeadlines] = useState<DataProps[]>();
  const [everything, setEverything] = useState<DataProps[]>();
  const [byCategory, setByCategory] = useState<DataProps[]>();
  const [filteredEverything, setFilteredEverything] = useState<DataProps[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const { headlinesLoader, everythingLoader } = useNewsContext();
  const theme = useTheme();
  const openModal = () => setIsModalVisible(true);

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
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

  useEffect(() => {
    if (searchText.trim().length === 0) {
      setFilteredEverything(everything || []);
    } else {
      const filtered = everything?.filter(item =>
        item.title?.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredEverything(filtered || []);
    }
  }, [searchText, everything]);

  const onScroll = (event: any) => {
    if (!selectedCategory) {
      const offsetY = event.nativeEvent.contentOffset.y;
      setCurrentOffset(offsetY);
    }
  };

  const onEndReached = () => {
    if (!everythingLoader.isLoadingMore && !selectedCategory) {
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

    if (!selectedCategory) {
      return everythingLoader.isLoadingMore && (
        <ActivityIndicator size="large" color={theme.colors.primaryColor} />
      );
    }
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <Header
          title={'News for your\nBoredom'}
          imageStr={require('../../assets/images/imgScreen2.png')}
        />
        {error && <Error err="Teste" />}
        <Row>
          <TextFieldStyled
            placeholder="Search for keywords"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <Button typeButton="icon" onPress={openModal}>
            <Filter />
          </Button>
        </Row>
        <CategoryScrollView>
          {selectedCategory !== '' &&
            <SelectableBox
              label={selectedCategory}
              onToggle={handleCategoryPress}
              selectedCategory={selectedCategory}
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
        <TextVariant textType="titleSmall">{!selectedCategory ? 'News' : `Top 20 news by category "${selectedCategory}"`}</TextVariant>
      </>
    );
  };

  const requestByCategory = async () => {
    try {
      const response = await api.get('/top-headlines', {
        params: {
          category: selectedCategory,
          apiKey: API_KEY,
          pageSize: 20,
          page: 1,
        },
      });
      setByCategory(response.data.articles);
    } catch (err: any) {
      Alert.alert(err.status);
    }
  };

  useEffect(() => {
    if (selectedCategory || selectedCategory !== '') {
      requestByCategory();
    }
  }, [selectedCategory]);

  return (
    <Container>
      <SearchFlatList
        data={selectedCategory ? byCategory : filteredEverything}
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
        ListHeaderComponent={ListHeaderComponent}
      />
      <ModalCategories
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleCategoryPress={handleCategoryPress}
        newsCategories={newsCategories}
        selectedCategory={selectedCategory}
      />
    </Container>
  );
};

export default SearchList;
