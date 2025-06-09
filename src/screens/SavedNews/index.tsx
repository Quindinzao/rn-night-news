/* eslint-disable react-hooks/exhaustive-deps */

// External Libraries
import { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';

// Components
import ItemCard from '../../components/ItemCard';
import ListEmptyComponent from '../../components/ListEmptyComponent';
import ListHeaderSavedComponent from '../../components/ListHeaderSavedComponent';

// Database
import { getSavedNews } from '../../database/queries/saved';

// Interfaces
import { ItemCardProps } from '../../interfaces/ItemCardProps';
import { DataProps } from '../../interfaces/DataProps';

// Styles
import {
  Container,
  SearchFlatList,
  Separator,
} from './styles';

const SavedNews = (): React.JSX.Element => {
  const [saved, setSaved] = useState<DataProps[]>([]);
  const [filteredSaved, setFilteredSaved] = useState<DataProps[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);

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

  const handleSearch = () => {
    if (searchText.trim().length === 0) {
      setFilteredSaved(saved || []);
    } else {
      const filtered = saved?.filter(item =>
        item.title?.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredSaved(filtered || []);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchText, saved]);

  const requestSaved = async () => {
    try {
      setRefreshing(true);
      const response = await getSavedNews() as DataProps[];
      setSaved(response);
    } catch (err: any) {
      console.log(err);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    requestSaved();
  }, []);

  return (
    <Container>
      <SearchFlatList
        data={filteredSaved}
        renderItem={({ item, index } : {item: any, index: number}) =>
          renderItemCard({
            itemCardType: 'favorites',
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
        scrollEventThrottle={16}
        ItemSeparatorComponent={separator}
        onEndReachedThreshold={0.1}
        keyboardShouldPersistTaps={'always'}
        ListHeaderComponent={
          <ListHeaderSavedComponent
            searchText={searchText}
            setSearchText={setSearchText}
          />
        }
        ListEmptyComponent={ListEmptyComponent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={requestSaved}
          />
        }
      />
    </Container>
  );
};

export default SavedNews;
