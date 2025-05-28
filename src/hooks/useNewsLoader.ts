// External Libraries
import { useEffect, useState } from 'react';

// .ENV
import { API_KEY } from '@env';

// Database
import { createTableEverything } from '../database/tables/everythingTable';
import { insertEverythingMultipleNews } from '../database/queries/insertEverythingMultipleNews';
import { getEverythingNews } from '../database/queries/getEverythingNews';

// Interfaces
import { DataProps } from '../interfaces/DataProps';

// Services
import { api } from '../services/newsApi';

export const useNewsLoader = () => {
  const [data, setData] = useState<DataProps[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  const loadNews = async () => {
    try {
      // const [responseHeadlines, responseEverything] = await Promise.all([
      //   api.get(`top-headlines?country=us&apiKey=${API_KEY}`),
      //   api.get(`everything?q=technology&apiKey=${API_KEY}`),
      // ]);
      const { data: apiData } = await api.get('everything', {
          params: {
            q: 'technology',
            apiKey: API_KEY,
          },
        }
      );

      await createTableEverything();
      await insertEverythingMultipleNews(apiData.articles);

      const sqliteData = await getEverythingNews();

      setData(sqliteData as DataProps[]);

    } catch (apiError: any) {

      try {
        const offlineData = await getEverythingNews();
        setData(offlineData as DataProps[]);
      } catch (sqliteError: any) {
        setError(JSON.stringify(sqliteError));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  return {data, loading, error};
};
