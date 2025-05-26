import { Body, Container } from './styles';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import { useRef } from 'react';
import { useTheme } from 'styled-components/native';

const Home = (): React.JSX.Element => {
  const theme = useTheme();
  const SCREEN_WIDTH
   = Dimensions.get('screen').width;
  const progress = useSharedValue<number>(0);
	const baseOptions = {
		vertical: false,
		width: SCREEN_WIDTH,
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
      borderColor: theme.colors.textColor,
      borderStyle: 'solid' as 'solid',
      width: 12,
      height: 12,
    },
    activeDotStyle: {
      backgroundColor: theme.colors.textColor,
    },
    containerStyle: {
      gap: 16,
      borderRadius: 12,
    },
  };

  const defaultDataWith6Colors = [
    '#B0604D',
    '#899F9C',
    '#B3C680',
    '#5C6265',
    '#F1F1F1',
  ];

  const ref = useRef<ICarouselInstance>(null);
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({ index });
	};

  const itemCarousel = () => {
    return (
      <ItemCard
        itemCardType={'carousel'}
        urlToImage={'https://gizmodo.com/app/uploads/2024/12/Tile.jpg'}
        title={'Tile’s 4-Pack Bluetooth Trackers Now Beat Apple’s AirTags on Price and Function, Shape Variety Included'}
        description={'For a limited time, you can get this four-pack of Tile trackers at all-time low price on Amazon.'}
        sourceName={'Gizmodo.com'}
        publishedAt={'2025-05-21T12:14:49Z'}
        isFavorite={false}
      />
    );
  };

  return (
    <Container>
      <Header
        title={'News for your\nInsomnia'}
        imageStr={require('../../assets/images/imgScreen1.png')}
      />
      <Body>

        <Carousel
					ref={ref}
					{...baseOptions}
					loop
					onProgressChange={progress}
					data={defaultDataWith6Colors}
					renderItem={itemCarousel}
				/>
        <Pagination.Basic
          {...paginationBasicStyle}
          progress={progress}
          data={defaultDataWith6Colors}
          onPress={onPressPagination}
        />

      </Body>
    </Container>
  );
};

export default Home;
