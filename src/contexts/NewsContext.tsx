/* eslint-disable react-hooks/exhaustive-deps */
// External Libraries
import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

// .ENV
import { API_KEY } from '@env';

// Hooks personalizados
import { useNewsLoader } from '../hooks/useNewsLoader';

// Database – criação de tabelas
import { createTableEverything } from '../database/tables/everythingTable';
import { createTableHeadlines } from '../database/tables/headlinesTable';
import { createTableByCategory } from '../database/tables/byCategoryTable';

// Database – queries
import { insertEverythingMultipleNews } from '../database/queries/everything/insertEverythingMultipleNews';
import { insertHeadlinesMultipleNews } from '../database/queries/headlines/insertHeadlinesMultipleNews';
import { insertByCategoryMultipleNews } from '../database/queries/byCategory/insertByCategoryMultipleNews';
import { getEverythingNews } from '../database/queries/everything/getEverythingNews';
import { getHeadlinesNews } from '../database/queries/headlines/getHeadlinesNews';
import { getByCategoryNews } from '../database/queries/byCategory/getByCategoryNews';
import { deleteEverythingNews } from '../database/queries/everything/deleteEverythingNews';
import { deleteHeadlinesNews } from '../database/queries/headlines/deleteHeadlinesNews';
import { deleteByCategoryNews } from '../database/queries/byCategory/deleteByCategoryNews';

// Contexto de Categorias
import { useCategoryContext } from './CategoryContext';

// Interfaces
import { DataProps } from '../interfaces/DataProps';

interface NewsLoaderProps {
  news: DataProps[];
  loading: boolean;
  error?: string;
  loadNews: () => void;
  loadMore: () => void;
  isLoadingMore: boolean;
}

interface NewsContextProps {
  everythingLoader: NewsLoaderProps;
  headlinesLoader: NewsLoaderProps;
  byCategoryLoader: NewsLoaderProps;
}

const NewsContext = createContext<NewsContextProps | undefined>(undefined);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const { selectedCategory } = useCategoryContext();

  // 1) Carregador “Everything” (sem depender de categoria)
  const everythingLoader = useNewsLoader({
    urlName: '/everything',
    params: {
      q: 'news',
      page: 1,
      apiKey: API_KEY,
    },
    createTable: createTableEverything,
    deleteNews: deleteEverythingNews,
    insertNews: insertEverythingMultipleNews,
    getNews: getEverythingNews,
  });

  // 2) Carregador “Headlines” (sem depender de categoria)
  const headlinesLoader = useNewsLoader({
    urlName: '/top-headlines',
    params: {
      country: 'us',
      pageSize: 5,
      apiKey: API_KEY,
    },
    createTable: createTableHeadlines,
    deleteNews: deleteHeadlinesNews,
    insertNews: insertHeadlinesMultipleNews,
    getNews: getHeadlinesNews,
  });

  // 3) Carregador “By Category”: agora reage à mudança de selectedCategory
  const byCategoryLoader = useNewsLoader({
    urlName: '/top-headlines',
    params: {
      country: 'us',
      category: selectedCategory,
      pageSize: 5,
      apiKey: API_KEY,
    },
    createTable: createTableByCategory,
    deleteNews: deleteByCategoryNews,
    insertNews: insertByCategoryMultipleNews,
    getNews: getByCategoryNews,
  });

  useEffect(() => {
    if (selectedCategory !== null) {
      byCategoryLoader.loadNews();
    }
  }, [selectedCategory]);

  return (
    <NewsContext.Provider value={{ everythingLoader, headlinesLoader, byCategoryLoader }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = (): NewsContextProps => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNewsContext must be used within a NewsProvider');
  }
  return context;
};
