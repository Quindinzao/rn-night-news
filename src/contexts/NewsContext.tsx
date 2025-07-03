/* eslint-disable react-hooks/exhaustive-deps */
// External Libraries
import React, {createContext, useContext, ReactNode, useEffect} from 'react';

// Hooks personalizados
import {useNewsLoader} from '../hooks/useNewsLoader';

// Database – criação de tabelas
import {createTableEverything} from '../database/tables/everythingTable';
import {createTableHeadlines} from '../database/tables/headlinesTable';
import {createTableByCategory} from '../database/tables/byCategoryTable';

// Database – queries
import {
  insertEverythingMultipleNews,
  getEverythingNews,
} from '../database/queries/everything';
import {
  insertHeadlinesMultipleNews,
  getHeadlinesNews,
} from '../database/queries/headlines';
import {
  insertByCategoryMultipleNews,
  getByCategoryNews,
} from '../database/queries/byCategory';

// Contexts
import {useCategoryContext} from './CategoryContext';

// Interfaces
import {NewsLoaderProps} from '../interfaces/NewsLoaderProps';

interface NewsContextProps {
  everythingLoader: NewsLoaderProps;
  headlinesLoader: NewsLoaderProps;
  byCategoryLoader: NewsLoaderProps;
}

const NewsContext = createContext<NewsContextProps | undefined>(undefined);

export const NewsProvider = ({children}: {children: ReactNode}) => {
  const {selectedCategory} = useCategoryContext();

  // 1) Carregador “Everything”
  const everythingLoader = useNewsLoader({
    tableName: 'everything',
    urlName: '/everything',
    params: {
      q: 'night',
      page: 1,
    },
    createTable: createTableEverything,
    insertNews: insertEverythingMultipleNews,
    getNews: getEverythingNews,
  });

  // 2) Carregador “Headlines”
  const headlinesLoader = useNewsLoader({
    tableName: 'headlines',
    urlName: '/top-headlines',
    params: {
      country: 'us',
      pageSize: 5,
    },
    createTable: createTableHeadlines,
    insertNews: insertHeadlinesMultipleNews,
    getNews: getHeadlinesNews,
  });

  // 3) Carregador “By Category”
  const byCategoryLoader = useNewsLoader({
    tableName: 'byCategory',
    urlName: '/top-headlines',
    params: {
      country: 'us',
      category: selectedCategory,
      pageSize: 5,
    },
    createTable: createTableByCategory,
    insertNews: insertByCategoryMultipleNews,
    getNews: getByCategoryNews,
  });

  useEffect(() => {
    if (selectedCategory !== null) {
      byCategoryLoader.loadNews();
    }
  }, [selectedCategory]);

  return (
    <NewsContext.Provider
      value={{everythingLoader, headlinesLoader, byCategoryLoader}}>
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
