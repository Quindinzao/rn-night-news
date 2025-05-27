import { useEffect, useState } from 'react';
import { DataProps } from '../interfaces/DataProps';
import { api } from '../services/newsApi';
import { API_KEY } from '@env';
import { createTableEverything } from '../database/tables/everythingTable';
import { insertEverythingMultipleNews } from '../database/queries/insertEverythingMultipleNews';
import { getEverythingNews } from '../database/queries/getEverythingNews';
import { Alert } from 'react-native';

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
      // Alert.alert('1:', JSON.stringify(apiData.articles));
      await insertEverythingMultipleNews(apiData.articles);

      Alert.alert('Inserção Completa!');
      const sqliteData = await getEverythingNews();
      Alert.alert('4:', JSON.stringify(sqliteData));

      setData(sqliteData as DataProps[]);
      Alert.alert('Modo online', 'Dados carregados da API.');

    } catch (apiError: any) {

      try {
        const offlineData = await getEverythingNews();
        setData(offlineData as DataProps[]);
        Alert.alert('Modo offline', JSON.stringify(offlineData));
      } catch (sqliteError: any) {
        setError(JSON.stringify(sqliteError));
        Alert.alert('Erro', 'Falha ao carregar dados.');
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
