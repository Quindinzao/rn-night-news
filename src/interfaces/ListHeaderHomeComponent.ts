// Interfaces
import { DataProps } from './DataProps';
import { ItemCardProps } from './ItemCardProps';

export interface ListHeaderHomeComponentProps {
  renderItemCard: (item: ItemCardProps, index: number) => any;
  list: DataProps[];
}
