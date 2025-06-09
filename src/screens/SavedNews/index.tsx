/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/no-unstable-nested-components */
// External Libraries
import { useEffect, useState } from 'react';

// Components
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import TextField from '../../components/TextField';
import Error from '../../components/Error';

// Database
import { getSavedNews } from '../../database/queries/saved';

// Interfaces
import { ItemCardProps } from '../../interfaces/ItemCardProps';
import { DataProps } from '../../interfaces/DataProps';

// Styles
import {
  Container,
  Row,
  SearchFlatList,
  Separator,
  TextVariant,
} from './styles';
import { RefreshControl } from 'react-native';

const SavedNews = (): React.JSX.Element => {
  const [error, setError] = useState<string>('');
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
  const ListHeaderComponent = () => {
    return (
      <>
        <Header
          title={'News for your\nMind'}
          imageStr={require('../../assets/images/imgScreen3.png')}
        />
        {error && <Error err="Teste" />}
        <Row>
          <TextField
            placeholder="Search for keywords"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </Row>
        <TextVariant textType="titleSmall">Saved</TextVariant>
      </>
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
      setError(err.message);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    requestSaved();
  }, []);

  return (
    <Container>
      {saved && saved?.length > 0 &&
        <SearchFlatList
          data={saved ? saved : filteredSaved}
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
          ListHeaderComponent={ListHeaderComponent}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={requestSaved}
            />
          }
        />
      }
    </Container>
  );
};

export default SavedNews;
