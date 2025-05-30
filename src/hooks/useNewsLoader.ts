/* eslint-disable react-hooks/exhaustive-deps */
// External Libraries
import { useEffect, useState } from 'react';

// .ENV
import { API_KEY } from '@env';

// Database - Tables
import { createTableEverything } from '../database/tables/everythingTable';
import { createTableHeadlines } from '../database/tables/headlinesTable';
import { createTableByCategories } from '../database/tables/byCategoriesTable';

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

// Interfaces
import { DataProps } from '../interfaces/DataProps';

// Services
import { api } from '../services/newsApi';

export const useNewsLoader = (category: string) => {
  const [everythingNews, setEverythingNews] = useState<DataProps[]>([]);
  const [headlinesNews, setHeadlinesNews] = useState<DataProps[]>([]);
  const [categoryNews, setCategoryNews] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  const loadNews = async () => {
    try {
      await Promise.all([
        createTableEverything(),
        createTableHeadlines(),
        createTableByCategories(),
      ]);

      const [everything, headlines, byCategory] = await Promise.all([
        api.get('everything', {
          params: {
            q: 'news',
            apiKey: API_KEY,
          },
        }),
        api.get('top-headlines', {
          params: {
            country: 'us',
            apiKey: API_KEY,
          },
        }),
        api.get('top-headlines', {
          params: {
            category: category.toLowerCase(),
            country: 'us',
            apiKey: API_KEY,
          },
        }),
      ]);

      await deleteEverythingNews();
      await deleteHeadlinesNews();
      await deleteByCategoryNews();

      await insertEverythingMultipleNews(everything.data.articles);
      await insertHeadlinesMultipleNews(headlines.data.articles);
      await insertByCategoryMultipleNews(byCategory.data.articles);

      const [sqliteEverything, sqliteHeadlines, sqliteByCategory] = await Promise.all([
        getEverythingNews(),
        getHeadlinesNews(),
        getByCategoryNews(),
      ]);

      setEverythingNews(sqliteEverything as DataProps[]);
      setHeadlinesNews(sqliteHeadlines as DataProps[]);
      setCategoryNews(sqliteByCategory as DataProps[]);
    } catch (err: any) {
      console.error('[useNewsLoader] API fallback triggered:', err.message);
      try {
        const [offlineEverything, offlineHeadlines, offlineByCategory] = await Promise.all([
          getEverythingNews(),
          getHeadlinesNews(),
          getByCategoryNews(),
        ]);

        setEverythingNews(offlineEverything as DataProps[]);
        setHeadlinesNews(offlineHeadlines as DataProps[]);
        setCategoryNews(offlineByCategory as DataProps[]);
      } catch (sqliteError: any) {
        setError(sqliteError.message);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadNews();
  }, [category]);

  return {
    everythingNews,
    headlinesNews,
    categoryNews,
    loading,
    error,
  };
};
