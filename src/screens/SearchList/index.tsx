/* eslint-disable react-hooks/exhaustive-deps */

// External Libraries
import { useEffect, useRef, useState } from 'react';
import { Alert, FlatList } from 'react-native';

// ENV
import { API_KEY } from '@env';

// Components
import ItemCard from '../../components/ItemCard';
import ModalCategories from '../../components/ModalCategories';
import ListEmptyComponent from '../../components/ListEmptyComponent';
import ListFooterComponent from '../../components/ListFooterComponent';
import ListHeaderComponent from '../../components/ListHeaderSearchComponent';

// Context
import { useNewsContext } from '../../contexts/NewsContext';

// Services
import { api } from '../../services/newsApi';

// Interfaces
import { ItemCardProps } from '../../interfaces/ItemCardProps';
import { DataProps } from '../../interfaces/DataProps';

// Constants
import { newsCategories } from '../../constants/categories';

// Styles
import {
  Container,
  SearchFlatList,
  Separator,
} from './styles';

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
      if (err.status === 429) {
        Alert.alert('Error', 'Too many requests, please try later.');
      } else if (err.message === 'Network Error') {
        Alert.alert('Error', 'Internet Connection');
      } else {
        Alert.alert('Error', 'Something went wrong, please try later.');
      }
      console.error(err);
    }
  };

  const search = () => {
    if (searchText.trim().length === 0) {
      setFilteredEverything(everything || []);
    } else {
      const filtered = everything?.filter(item =>
        item.title?.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredEverything(filtered || []);
    }
  };

  useEffect(() => {
    search();
  }, [searchText, everything]);

  useEffect(() => {
    setHeadlines(headlinesLoader.news);
    setEverything(everythingLoader.news);
  }, [
    headlinesLoader.news,
    everythingLoader.news,
  ]);

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
        ListFooterComponent={
          <ListFooterComponent
            error={error}
            setError={setError}
            selectedCategory={selectedCategory}
            isLoadingMore={everythingLoader.isLoadingMore}
          />
        }
        ListHeaderComponent={
          <ListHeaderComponent
            setIsModalVisible={setIsModalVisible}
            error={error}
            searchText={searchText}
            setSearchText={setSearchText}
            selectedCategory={selectedCategory}
            renderItemCard={renderItemCard}
            list={headlines ?? []}
            handleCategoryPress={handleCategoryPress}
          />
        }
        ListEmptyComponent={ListEmptyComponent}
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
