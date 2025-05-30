// External Libraries
import React, { createContext, useContext, ReactNode } from 'react';

// .ENV
import { API_KEY } from '@env';

// Hooks
import { useNewsLoader } from '../hooks/useNewsLoader';

// Database - Tables
import { createTableEverything } from '../database/tables/everythingTable';
import { createTableHeadlines } from '../database/tables/headlinesTable';
import { createTableByCategory } from '../database/tables/byCategoryTable';

// Database - Queries
import { insertEverythingMultipleNews } from '../database/queries/everything/insertEverythingMultipleNews';
import { insertHeadlinesMultipleNews } from '../database/queries/headlines/insertHeadlinesMultipleNews';
import { insertByCategoryMultipleNews } from '../database/queries/byCategory/insertByCategoryMultipleNews';
import { getEverythingNews } from '../database/queries/everything/getEverythingNews';
import { getHeadlinesNews } from '../database/queries/headlines/getHeadlinesNews';
import { getByCategoryNews } from '../database/queries/byCategory/getByCategoryNews';
import { deleteEverythingNews } from '../database/queries/everything/deleteEverythingNews';
import { deleteHeadlinesNews } from '../database/queries/headlines/deleteHeadlinesNews';
import { deleteByCategoryNews } from '../database/queries/byCategory/deleteByCategoryNews';
import { useCategoriesContext } from './CategoriesContext';

// Interfaces
import { DataProps } from '../interfaces/DataProps';

interface NewsLoaderProps {
  news: DataProps[];
  loading: boolean;
  error?: string;
}

interface NewsContextProps {
  everythingLoader: NewsLoaderProps;
  headlinesLoader: NewsLoaderProps;
  byCategoryLoader: NewsLoaderProps;
}

const NewsContext = createContext<NewsContextProps | undefined>(undefined);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const { data } = useCategoriesContext();

  const everythingLoader = useNewsLoader({
    category: 'news',
    urlName: '/everything',
    params: { q: 'technology', pageSize: 20, apiKey: API_KEY },
    createTable: createTableEverything,
    deleteNews: deleteEverythingNews,
    insertNews: insertEverythingMultipleNews,
    getNews: getEverythingNews,
  });

  const headlinesLoader = useNewsLoader({
    category: 'technology',
    urlName: '/top-headlines',
    params: { country: 'us', pageSize: 10, apiKey: API_KEY },
    createTable: createTableHeadlines,
    deleteNews: deleteHeadlinesNews,
    insertNews: insertHeadlinesMultipleNews,
    getNews: getHeadlinesNews,
  });

  const byCategoryLoader = useNewsLoader({
    category: 'sports',
    urlName: '/top-headlines',
    params: { country: 'us', category: data?.categoryName, pageSize: 5, apiKey: API_KEY },
    createTable: createTableByCategory,
    deleteNews: deleteByCategoryNews,
    insertNews: insertByCategoryMultipleNews,
    getNews: getByCategoryNews,
  });

  return (
    <NewsContext.Provider value={{ everythingLoader, headlinesLoader, byCategoryLoader }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = (): NewsContextProps => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};
