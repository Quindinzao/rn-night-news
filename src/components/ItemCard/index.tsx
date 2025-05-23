import React from 'react';
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
} from './styles';
import { View } from 'react-native';
import Text from '../Text';
import YellowBookmarkActive from '../../assets/svg/YellowBookmarkActive';
import YellowBookmark from '../../assets/svg/YellowBookmark';

type ItemCardProps = {
  itemCardType: 'carousel' | 'verticalList' | 'horizontalList' | 'favorites';
  urlToImage: string;
  title: string;
  description: string;
  sourceName: string;
  publishedAt: string;
  isFavorite: boolean;
}

const ItemCard = ({
  itemCardType,
  urlToImage,
  title,
  description,
  sourceName,
  publishedAt,
  isFavorite,
} : ItemCardProps): React.JSX.Element => {
  return (
    <RNItemCard itemCardType={itemCardType} activeOpacity={0.7}>
      <HeaderCard itemCardType={itemCardType}>
        <HeaderImageCard itemCardType={itemCardType} source={{ uri: urlToImage }} />
        <Overlay colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.7)']} />
        {(itemCardType === 'carousel' || itemCardType === 'favorites') &&
          (
            <HeaderTitleCard itemCardType={itemCardType}>
              <Text textType="titleMedium" numberOfLines={5}>{title}</Text>
            </HeaderTitleCard>
          )
        }
        {itemCardType === 'favorites' && (
          <FavoriteFlag activeOpacity={0.7}>
            {isFavorite ? <YellowBookmarkActive /> : <YellowBookmark />}
          </FavoriteFlag>
        )}
      </HeaderCard>
      <BodyCard itemCardType={itemCardType}>
        <View>
          {(itemCardType === 'verticalList' || itemCardType === 'horizontalList') &&
            (
              <Text
                textType="titleRegular"
                ellipsizeMode="tail"
                numberOfLines={itemCardType === 'horizontalList' ? 2 : 1}
              >
                {title}
              </Text>
            )
          }
          {itemCardType !== 'horizontalList' &&
            <Description
              itemCardType={itemCardType}
              textType={itemCardType === 'verticalList' ? 'bodySmall' : 'bodyLarge'}
              numberOfLines={3}
            >
              {description}
            </Description>
          }
        </View>
        {
          <Row>
            {itemCardType === 'verticalList' && <Text textType={'captionSmall'} numberOfLines={3}>{sourceName}</Text>}
            {(itemCardType === 'verticalList' || itemCardType === 'horizontalList') &&
              <Text
                textType={'captionSmallItalic'}
                numberOfLines={3}
              >
                {new Date(publishedAt).toLocaleDateString('en-US')}
              </Text>
            }
          </Row>
        }
      </BodyCard>
    </RNItemCard>
  );
};

export default ItemCard;
