// External Libraries
import { useRef } from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';

// Components
import Header from '../Header';

// Interfaces
import { ListHeaderHomeComponentProps } from '../../interfaces/ListHeaderHomeComponent';

// Styles
import { TextVariant } from './styles';

const ListHeaderHomeComponent = (props: ListHeaderHomeComponentProps) => {
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

  const ref = useRef<ICarouselInstance>(null);
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({ index });
  };


  return (
    <>
      <Header
        title={'News for your\nInsomnia'}
        imageStr={require('../../assets/images/imgScreen1.png')}
      />
      <TextVariant textType="titleSmall">Favorite category</TextVariant>
      {props.list && props.list.length > 0 &&
        <>
          <Carousel
            ref={ref}
            {...baseOptions}
            loop
            onProgressChange={progress}
            data={props.list}
            renderItem={({ item, index }) =>
              props.renderItemCard({
                itemCardType: 'carousel',
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
          />
          <Pagination.Basic
            {...paginationBasicStyle}
            progress={progress}
            data={props.list}
            onPress={onPressPagination}
          />
        </>
      }
      <TextVariant textType="titleSmall">News</TextVariant>
    </>
  );
};

export default ListHeaderHomeComponent;
