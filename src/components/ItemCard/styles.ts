// External Libraries
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

// Components
import Text from '../Text';

// Interfaces
import { ItemCardStyledProps } from '../../interfaces/ItemCardProps';

// Styles
import { getLayoutByType } from '../../styles/layoutByType';
import { theme as shadowColor } from '../../styles/theme';

const layout = getLayoutByType();

export const RNItemCard = styled.View<ItemCardStyledProps>`
  align-items: center;

  height: ${({ itemCardType }) => layout.RNItemCard.height[itemCardType]};
  width: ${({ itemCardType }) => layout.RNItemCard.width[itemCardType]};
`;

export const TouchableItemCard = styled.TouchableOpacity<ItemCardStyledProps>`
  height: 100%;

  width: ${({ itemCardType }) => layout.TouchableItemCard.width[itemCardType]};
  flex-direction:  ${({ itemCardType }) => layout.TouchableItemCard.flexDirection[itemCardType]};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
`;

export const HeaderCard = styled.View<ItemCardStyledProps>`
  height: ${({ itemCardType }) => layout.HeaderCard.height[itemCardType]};
  width: ${({ itemCardType }) => layout.HeaderCard.width[itemCardType]};
`;

export const HeaderImageCard = styled.Image<ItemCardStyledProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  object-fit: cover;

  border-bottom-left-radius: ${({ itemCardType }) => layout.HeaderImageCard.borderBottomLeftRadius[itemCardType]};
  border-top-right-radius: ${({ itemCardType }) => layout.HeaderImageCard.borderBottomRightRadius[itemCardType]};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.lg}px;
`;

export const Overlay = styled(LinearGradient).attrs({
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const HeaderTitleCard = styled.View<ItemCardStyledProps>`
  width: 100%;
  height: 100%;
  justify-content: flex-end;

  padding: ${({ theme }) => theme.spacing.md}px;
  padding-bottom: ${({ itemCardType }) => layout.HeaderTitleCard.paddingBottom[itemCardType]};
`;

export const FavoriteFlag = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;

  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.md}px;
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.md}px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  right: ${({ theme }) => theme.spacing.md}px;
`;

export const BodyCard = styled.View<ItemCardStyledProps>`
  flex: 1;
  overflow: hidden;
  justify-content: space-between;

  padding-top: ${({ itemCardType }) => layout.BodyCard.paddingTop[itemCardType]}; 
  padding-right: ${({ theme }) => theme.spacing.md}px;
  padding-left: ${({ theme }) => theme.spacing.md}px;
  padding-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled(Text)<ItemCardStyledProps>`
  margin-top: ${({ itemCardType }) => layout.Description.marginTop[itemCardType]};
`;

RNItemCard.defaultProps = {
  style: {
    shadowColor: shadowColor.colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
};
