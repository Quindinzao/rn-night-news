/* eslint-disable react-hooks/exhaustive-deps */
// External Libraries
import React, {createContext, useContext, ReactNode, useEffect} from 'react';

// Hooks personalizados
import {useNewsLoader} from '../hooks/useNewsLoader';

// Database – create tables
import {createTableNews} from '../database/tables/newsTable';

// Database – queries
import {getNews, insertNews} from '../database/queries/news';

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
    typeNews: 'everything',
    urlName: '/everything',
    params: {
      q: 'night',
      page: 1,
      pageSize: 30,
    },
    createTable: createTableNews,
    insertNews: insertNews,
    getNews: () => getNews('everything'),
  });

  // 2) Carregador “Headlines”
  const headlinesLoader = useNewsLoader({
    typeNews: 'headlines',
    urlName: '/top-headlines',
    params: {
      country: 'us',
      pageSize: 5,
    },
    createTable: createTableNews,
    insertNews: insertNews,
    getNews: () => getNews('headlines'),
  });

  // 3) Carregador “By Category”
  const byCategoryLoader = useNewsLoader({
    typeNews: 'byCategory',
    urlName: '/top-headlines',
    params: {
      country: 'us',
      category: selectedCategory,
      pageSize: 5,
    },
    createTable: createTableNews,
    insertNews: insertNews,
    getNews: () => getNews('byCategory'),
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
