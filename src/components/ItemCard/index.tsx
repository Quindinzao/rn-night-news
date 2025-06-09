// External Libraries
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import Text from '../Text';

// Routes
import { propsStack } from '../../routes/models';

// Interfaces
import { ItemCardProps } from '../../interfaces/ItemCardProps';

// Styles
import {
  BodyCard,
  Description,
  FavoriteFlag,
  HeaderCard,
  HeaderImageCard,
  HeaderTitleCard,
  Overlay,
  RNItemCard,
  Row,
  TouchableItemCard,
} from './styles';

// Assets
import YellowBookmarkActive from '../../assets/svg/YellowBookmarkActive';

const ItemCard = (props: ItemCardProps): React.JSX.Element => {
  const navigation = useNavigation<propsStack>();
  return (
    <RNItemCard itemCardType={props.itemCardType}>
      <TouchableItemCard
        itemCardType={props.itemCardType}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('NewsDetail', { newsDetail: {
          id: props.id,
          sourceName: props.sourceName,
          author: props.author,
          title: props.title,
          description: props.description,
          url: props.url,
          urlToImage: props.urlToImage,
          publishedAt: props.publishedAt,
          content: props.content,
        } })}
      >
        <HeaderCard itemCardType={props.itemCardType}>
          <HeaderImageCard itemCardType={props.itemCardType} source={{ uri: props.urlToImage }} />
          <Overlay itemCardType={props.itemCardType} colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.7)']} />
          {(props.itemCardType === 'carousel' || props.itemCardType === 'favorites') &&
            (
              <HeaderTitleCard itemCardType={props.itemCardType}>
                <Text textType="titleMedium" numberOfLines={5}>{props.title}</Text>
              </HeaderTitleCard>
            )
          }
          {props.itemCardType === 'favorites' && (
            <FavoriteFlag activeOpacity={0.7}>
              <YellowBookmarkActive />
            </FavoriteFlag>
          )}
        </HeaderCard>
        <BodyCard itemCardType={props.itemCardType}>
          <View>
            {(props.itemCardType === 'verticalList' || props.itemCardType === 'horizontalList') &&
              (
                <Text
                  textType="titleRegular"
                  ellipsizeMode="tail"
                  numberOfLines={props.itemCardType === 'horizontalList' ? 2 : 1}
                >
                  {props.title}
                </Text>
              )
            }
            {props.itemCardType !== 'horizontalList' &&
              <Description
                itemCardType={props.itemCardType}
                textType={props.itemCardType === 'verticalList' ? 'bodySmall' : 'bodyLarge'}
                numberOfLines={3}
              >
                {props.description}
              </Description>
            }
          </View>
          {
            <Row>
              {props.itemCardType === 'verticalList' && <Text textType={'captionSmall'} numberOfLines={3}>{props.sourceName}</Text>}
              {(props.itemCardType === 'verticalList' || props.itemCardType === 'horizontalList') &&
                <Text textType={'captionSmallItalic'}>
                  {new Date(props.publishedAt).toLocaleDateString('en-US')}
                </Text>
              }
            </Row>
          }
        </BodyCard>
      </TouchableItemCard>
    </RNItemCard>
  );
};

export default ItemCard;
