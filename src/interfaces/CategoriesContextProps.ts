export interface CategoryContextProps {
  isReady: boolean;
  selectedCategory: string | null;
  saveCategory: (category: string) => Promise<boolean>;
  refresh: () => Promise<void>;
  error: string | null;
}
