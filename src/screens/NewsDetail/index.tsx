/* eslint-disable react-hooks/exhaustive-deps */
// External Libraries
import { useEffect, useState } from 'react';
import { Alert, Linking } from 'react-native';

// Components
import Header from '../../components/Header';
import Text from '../../components/Text';
import Button from '../../components/Button';
import ItemCard from '../../components/ItemCard';
import Error from '../../components/Error';

// ENV
import { API_KEY } from '@env';

// Database
import { getSavedNews, insertSavedNews, removeSavedNews } from '../../database/queries/saved';

// Routes
import { propsNewsDetail } from '../../routes/models';

// Services
import { api } from '../../services/newsApi';

// Interfaces
import { DataProps } from '../../interfaces/DataProps';
import { ItemCardProps } from '../../interfaces/ItemCardProps';

// Styles
import {
  Container,
  Content,
  Row,
  StyledTextContent,
  StyledText,
  TextVariant,
  NewsDetailFlatList,
  Separator,
} from './styles';

const NewsDetail = ({route}: propsNewsDetail) => {
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<DataProps[]>([]);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const props = route.params.newsDetail;

  const separator = () => <Separator />;
  const getRelatedNews = async () => {
    try {
      const response = await api.get('/top-headlines', {
        params: {
          q: props.title.split(' ')[0],
          apiKey: API_KEY,
          pageSize: 5,
          page: 1,
        },
      });
      setData(response.data.articles);
    } catch (err: any) {
      if (err.code === 'ERR_NETWORK') {
        setError('You do not have access to internet.');
      } else {
        setError('Something went wrong, please, try again later.' + err.message);
      }
    }
  };

  const getIsSaved = async () => {
    try {
      const response = await getSavedNews() as DataProps[];
      const found = response.find(item => item.url === props.url);
      setIsSaved(!!found);
    } catch (err: any) {
      Alert.alert('Error', 'Oops! Something went wrong.');
    }
  };

  const toggleSave = async () => {
    try {
      if (isSaved) {
        await removeSavedNews(props.url);
        setIsSaved(false);
      } else {
        await insertSavedNews({
          id: props.id,
          sourceName: props.sourceName,
          author: props.author,
          title: props.title,
          description: props.description,
          url: props.url,
          urlToImage: props.urlToImage,
          publishedAt: props.publishedAt,
          content: props.content,
        });
        setIsSaved(true);
      }
    } catch (err: any) {
      Alert.alert('Error', 'Oops! Something went wrong. Try again later.');
    }
  };

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
    getRelatedNews();
    getIsSaved();
  }, []);

  return (
    <Container>
      <Header
        onToggle={toggleSave}
        isSaved={isSaved}
        isBack
        title={props.title}
        imageStr={{ uri: props.urlToImage }}
      />
      <Content>
        {props.author && <Row>
          <Text textType="captionLarge">Author: </Text>
          <StyledText textType="captionLargeItalic" ellipsizeMode="tail" numberOfLines={1}>{props.author}</StyledText>
        </Row>}
        {props.publishedAt && <Row>
          <Text textType="captionLarge">Publication Date: </Text>
          <StyledText textType="captionLargeItalic" ellipsizeMode="tail" numberOfLines={1}>{new Date(props.publishedAt).toLocaleDateString('en-US')}</StyledText>
        </Row>}
        {props.url && <Row>
          <Text textType="captionLarge">Visit the original news: </Text>
          <StyledText textType="captionLargeItalic" ellipsizeMode="tail" numberOfLines={1} onPress={() => Linking.openURL(props.url)}>{props.url}</StyledText>
        </Row>}
        {props.content && <StyledTextContent textType="bodyLarge">{props.content}</StyledTextContent>}
        <Button onPress={() => Linking.openURL(props.url)} typeButton={'text'}>
          <Text textType="bodyMedium">Visit the original news</Text>
        </Button>
        {data && !error &&
          <>
            <TextVariant textType="titleSmall">Related news</TextVariant>
            <NewsDetailFlatList
              data={data}
              renderItem={({ item, index } : {item: any, index: number}) =>
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
              }
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={separator}
            />
          </>
        }
        {error && <Error err={error} />}
      </Content>
    </Container>
  );
};

export default NewsDetail;
