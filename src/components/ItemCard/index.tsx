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
import { ItemCardProps } from '../../interfaces/ItemCardProps';

const ItemCard = (props: ItemCardProps): React.JSX.Element => {
  return (
    <RNItemCard itemCardType={props.itemCardType} activeOpacity={0.7}>
      <HeaderCard itemCardType={props.itemCardType}>
        <HeaderImageCard itemCardType={props.itemCardType} source={{ uri: props.urlToImage }} />
        <Overlay colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.7)']} />
        {(props.itemCardType === 'carousel' || props.itemCardType === 'favorites') &&
          (
            <HeaderTitleCard itemCardType={props.itemCardType}>
              <Text textType="titleMedium" numberOfLines={5}>{props.title}</Text>
            </HeaderTitleCard>
          )
        }
        {props.itemCardType === 'favorites' && (
          <FavoriteFlag activeOpacity={0.7}>
            {props.isFavorite ? <YellowBookmarkActive /> : <YellowBookmark />}
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
              <Text
                textType={'captionSmallItalic'}
                numberOfLines={3}
              >
                {new Date(props.publishedAt).toLocaleDateString('en-US')}
              </Text>
            }
          </Row>
        }
      </BodyCard>
    </RNItemCard>
  );
};

export default ItemCard;
