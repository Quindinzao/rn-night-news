// Interfaces
import { DataProps } from './DataProps';
import { ItemCardProps } from './ItemCardProps';

export interface ListHeaderSearchComponentProps {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  renderItemCard: (item: ItemCardProps, index: number) => any;
  list: DataProps[];
  handleCategoryPress: (category: string) => void;
}
