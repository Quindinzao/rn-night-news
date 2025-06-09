export interface ListFooterComponentProps {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  isLoadingMore: boolean;
}
