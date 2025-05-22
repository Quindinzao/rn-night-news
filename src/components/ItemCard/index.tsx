import React from 'react';
import { HeaderCard, HeaderImageCard, HeaderTitleCard, Overlay, RNItemCard, Body } from './styles';
import Text from '../Text';

const ItemCard = (): React.JSX.Element => {
  return (
    <RNItemCard>
      <HeaderCard>
        <HeaderImageCard source={require('../../assets/images/imgScreenMock.png')} />
        <Overlay colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.7)']} />
        <HeaderTitleCard>
          <Text type="titleMedium" numberOfLines={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </HeaderTitleCard>
      </HeaderCard>
      <Body>
        <Text type="bodyLarge" numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id sem orci. Vivamus viverra rutrum mauris id tincidunt. Nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id sem orci. Vivamus viverra rutrum mauris id tincidunt.</Text>
      </Body>
    </RNItemCard>
  );
};

export default ItemCard;
