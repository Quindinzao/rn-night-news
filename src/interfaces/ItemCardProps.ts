type ItemCardType = 'carousel' | 'verticalList' | 'horizontalList' | 'favorites'

export interface ItemCardStyledProps {
  itemCardType: ItemCardType
}

export interface ItemCardProps {
  itemCardType: ItemCardType;
  id: number,
  author: string,
  content: string
  url: string,
  urlToImage: string;
  title: string;
  description: string;
  sourceName: string;
  publishedAt: string;
  isFavorite: boolean;
}
