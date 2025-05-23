import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import Text from '../Text';

type ItemCardProps = {
  itemCardType: 'carousel' | 'verticalList' | 'horizontalList' | 'favorites';
}

export const RNItemCard = styled.TouchableOpacity<ItemCardProps>`
  height: ${({ itemCardType: type }) =>
    type === 'carousel' ? '405px' :
    type === 'verticalList' ? '144px' :
    type === 'horizontalList' ? '258px' :
    type === 'favorites' && '331px'
  };
  width: ${({ itemCardType: type }) => type === 'horizontalList' ? '250px' : '100%'};
  flex-direction:  ${({ itemCardType: type }) => type === 'verticalList' ? 'row' : 'column'};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
`;

export const HeaderCard = styled.View<ItemCardProps>`
  height: ${({ itemCardType: type }) =>
    type === 'carousel' ? '256px' :
    type === 'verticalList' ? '144px' :
    type === 'horizontalList' ? '156px' :
    type === 'favorites' && '216px'
  };
  width: ${({ itemCardType: type }) =>
    type === 'carousel' ? '100%' :
    type === 'verticalList' ? '120px' :
    type === 'horizontalList' ? '250px' :
    type === 'favorites' && '100%'
  };
`;

export const HeaderImageCard = styled.Image<ItemCardProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  object-fit: cover;

  border-bottom-left-radius: ${({ theme, itemCardType: type }) => type === 'verticalList' ? theme.borderRadius.lg + 'px' : '0'};
  border-top-right-radius: ${({ theme, itemCardType: type }) => type === 'verticalList' ? '0' : theme.borderRadius.lg + 'px'};
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

export const HeaderTitleCard = styled.View<ItemCardProps>`
  width: 100%;
  height: 100%;
  justify-content: flex-end;

  padding: ${({ theme }) => theme.spacing.md}px;
  padding-bottom: ${({ theme, itemCardType: type }) => type === 'horizontalList' ? '0' : theme.spacing.md + 'px'};
`;

export const FavoriteFlag = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;

  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.md};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.backgroundAppColor};
  right: ${({ theme }) => theme.spacing.md}px;
`;

export const BodyCard = styled.View<ItemCardProps>`
  flex: 1;
  overflow: hidden;
  justify-content: space-between;

  padding-top: ${({ theme, itemCardType: type }) => type === 'carousel' ? theme.spacing.lg + 'px' : theme.spacing.md + 'px'}; 
  padding-right: ${({ theme }) => theme.spacing.md}px;
  padding-left: ${({ theme }) => theme.spacing.md}px;
  padding-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled(Text)<ItemCardProps>`
  margin-top: ${({ theme, itemCardType: type }) => type === 'verticalList' ? theme.spacing.sm + 'px' : '0'};
`;

RNItemCard.defaultProps = {
  style: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
};
