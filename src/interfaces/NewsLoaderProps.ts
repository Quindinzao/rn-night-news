// Interfaces
import { DataProps } from './DataProps';

export interface NewsLoaderProps {
  news: DataProps[];
  loading: boolean;
  error?: string;
  loadNews: () => void;
  loadMore: () => void;
  isLoadingMore: boolean;
}
