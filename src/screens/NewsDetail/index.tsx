/* eslint-disable react-hooks/exhaustive-deps */
// External Libraries
import {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Linking} from 'react-native';

// Components
import Header from '../../components/Header';
import Text from '../../components/Text';
import Button from '../../components/Button';
import ItemCard from '../../components/ItemCard';
import Error from '../../components/Error';
import ListEmptyComponent from '../../components/ListEmptyComponent';

// Database
import {
  getSavedNews,
  insertSavedNews,
  removeSavedNews,
} from '../../database/queries/saved';

// Routes
import {propsNewsDetail} from '../../routes/models';

// Hooks
import {useNewsApiLoader} from '../../hooks/useNewsApiLoader';

// Interfaces
import {DataProps} from '../../interfaces/DataProps';
import {ItemCardProps} from '../../interfaces/ItemCardProps';

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
  const [isSaved, setIsSaved] = useState(false);
  const props = route.params.newsDetail;
  const {
    news: relatedNews,
    error,
    loading,
    loadNews,
  } = useNewsApiLoader({
    urlName: '/top-headlines',
    params: {
      q: props.title.split(' ')[0],
      pageSize: 5,
    },
    typeNews: 'headlines',
  });

  console.log({title: props.title.split(' ')[0]});

  const separator = () => <Separator />;

  const getIsSaved = async () => {
    try {
      const response = (await getSavedNews()) as DataProps[];
      const found = response.find(item => item.url === props.url);
      setIsSaved(!!found);
    } catch {
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
          typeNews: 'saved',
        });
        setIsSaved(true);
      }
    } catch {
      Alert.alert(
        'Error',
        'Oops! Something went wrong. ToggleSaved. Try again later.',
      );
    }
  };

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
    loadNews();
    getIsSaved();
  }, []);

  return (
    <Container>
      <Header
        onToggle={toggleSave}
        isSaved={isSaved}
        isBack
        title={props.title}
        imageStr={{uri: props.urlToImage}}
      />
      <Content>
        {props.author && (
          <Row>
            <Text textType="captionLarge">Author: </Text>
            <StyledText
              textType="captionLargeItalic"
              ellipsizeMode="tail"
              numberOfLines={1}>
              {props.author}
            </StyledText>
          </Row>
        )}
        {props.publishedAt && (
          <Row>
            <Text textType="captionLarge">Publication Date: </Text>
            <StyledText
              textType="captionLargeItalic"
              ellipsizeMode="tail"
              numberOfLines={1}>
              {new Date(props.publishedAt).toLocaleDateString('en-US')}
            </StyledText>
          </Row>
        )}
        {props.url && (
          <Row>
            <Text textType="captionLarge">Visit the original news: </Text>
            <StyledText
              textType="captionLargeItalic"
              ellipsizeMode="tail"
              numberOfLines={1}
              onPress={() => Linking.openURL(props.url)}>
              {props.url}
            </StyledText>
          </Row>
        )}
        {props.content && (
          <StyledTextContent textType="bodyLarge">
            {props.content.split('[')[0]}
          </StyledTextContent>
        )}
        <Button onPress={() => Linking.openURL(props.url)} typeButton={'text'}>
          <Text textType="bodyMedium">Visit the original news</Text>
        </Button>

        {!error && (
          <>
            <TextVariant textType="titleSmall">Related news</TextVariant>
            <NewsDetailFlatList
              data={relatedNews}
              renderItem={({item, index}: {item: any; index: number}) =>
                renderItemCard(
                  {
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
                  },
                  index,
                )
              }
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={separator}
              ListEmptyComponent={
                loading ? <ActivityIndicator /> : <ListEmptyComponent />
              }
            />
          </>
        )}
        {error && <Error err={error} />}
      </Content>
    </Container>
  );
};

export default NewsDetail;
