/* eslint-disable react-hooks/exhaustive-deps */
// External Libraries
import { useEffect, useState } from 'react';
import { Linking } from 'react-native';

// Components
import Header from '../../components/Header';
import Text from '../../components/Text';
import Button from '../../components/Button';
import ItemCard from '../../components/ItemCard';

// ENV
import { API_KEY } from '@env';

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
import Error from '../../components/Error';

const NewsDetail = ({route}: propsNewsDetail) => {
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<DataProps[]>([]);
  const props = route.params.newsDetail;

  const separator = () => <Separator />;
  const getRelatedNews = async () => {
    try {
      const response = await api.get('/everything', {
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
        setError('Something went wrong, please, try again later.');
      }
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
  }, []);

  return (
    <Container>
      <Header showIsSaved isBack title={props.title} imageStr={{ uri: props.urlToImage }}/>
      <Content>
        {error && <Error err={error} />}
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
        {data && data.length > 0 &&
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
            ItemSeparatorComponent={separator}
          />
        </>
        }
      </Content>
    </Container>
  );
};

export default NewsDetail;
