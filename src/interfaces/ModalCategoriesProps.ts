export interface ModalCategoriesProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleCategoryPress: (category: string) => void;
  newsCategories: string[];
  selectedCategory: string;
}
