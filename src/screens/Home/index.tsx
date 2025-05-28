// External Libraries
import { useRef } from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';

// Components
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';

// Interfaces
import { ItemCardProps } from '../../interfaces/ItemCardProps';

// Styles
import {
  Container,
  HomeFlatList,
  Separator,
  TextVariant,
} from './styles';

const Home = (): React.JSX.Element => {
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

  const defaultList = [0, 1, 2, 3, 4, 5];

  const ref = useRef<ICarouselInstance>(null);
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({ index });
	};

  const separator = () => <Separator />;
  const renderItemCard = (props: ItemCardProps) => {
    return (
      <ItemCard
        itemCardType={props.itemCardType}
        urlToImage={props.urlToImage}
        title={props.title}
        description={props.description}
        sourceName={props.sourceName}
        publishedAt={props.publishedAt}
        isFavorite={props.isFavorite}
      />
    );
  };

  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //       try {
  //           const response = await axios.get(API_URL);
  //           Alert.alert('response:', JSON.stringify(response));
  //           setArticles(response.data.articles);
  //       } catch (e) {
  //           setError('Failed to load news articles');
  //           console.error(e);
  //       } finally {
  //           setLoading(false);
  //       }
  //   };

  //   fetchNews();
  // }, []);

  return (
    <Container>
      <HomeFlatList
        data={defaultList}
        renderItem={() => renderItemCard({
          itemCardType: 'verticalList',
          urlToImage: 'https://gizmodo.com/app/uploads/2024/12/Tile.jpg',
          title: 'Tile’s 4-Pack Bluetooth Trackers Now Beat Apple’s AirTags on Price and Function, Shape Variety Included',
          description: 'For a limited time, you can get this four-pack of Tile trackers at all-time low price on Amazon.',
          sourceName: 'Gizmodo.com',
          publishedAt: '2025-05-21T12:14:49Z',
          isFavorite: false,
        })}
        ItemSeparatorComponent={separator}
        ListHeaderComponent={
          <>
            <Header
              title={'News for your\nInsomnia'}
              imageStr={require('../../assets/images/imgScreen1.png')}
            />
            <TextVariant textType="titleSmall">Favorites categories</TextVariant>
            <Carousel
              ref={ref}
              {...baseOptions}
              loop
              onProgressChange={progress}
              data={defaultList}
              renderItem={() => renderItemCard({
                itemCardType: 'carousel',
                urlToImage: 'https://gizmodo.com/app/uploads/2024/12/Tile.jpg',
                title: 'Tile’s 4-Pack Bluetooth Trackers Now Beat Apple’s AirTags on Price and Function, Shape Variety Included',
                description: 'For a limited time, you can get this four-pack of Tile trackers at all-time low price on Amazon.',
                sourceName: 'Gizmodo.com',
                publishedAt: '2025-05-21T12:14:49Z',
                isFavorite: false,
              })}
            />
            <Pagination.Basic
              {...paginationBasicStyle}
              progress={progress}
              data={defaultList}
              onPress={onPressPagination}
            />
            <TextVariant textType="titleSmall">News</TextVariant>
        </>
        }
      />
    </Container>
  );
};

export default Home;
