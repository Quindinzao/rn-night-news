type ItemCardType = 'carousel' | 'verticalList' | 'horizontalList' | 'favorites'

export interface ItemCardStyledProps {
  itemCardType: ItemCardType
}

export interface ItemCardProps {
  itemCardType: ItemCardType;
  urlToImage: string;
  title: string;
  description: string;
  sourceName: string;
  publishedAt: string;
  isFavorite: boolean;
}
