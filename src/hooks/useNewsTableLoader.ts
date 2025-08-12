/* eslint-disable react-hooks/exhaustive-deps */
// External Libraries
import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

// Hooks
import {useNewsApiLoader} from './useNewsApiLoader';

// Interfaces
import {DataProps} from '../interfaces/DataProps';
import {NewsProps} from '../interfaces/NewsProps';

export const useNewsTableLoader = (props: NewsProps) => {
  const apiLoader = useNewsApiLoader(props);
  const [offlineNews, setOfflineNews] = useState<DataProps[]>([]);
  const [isOffline, setIsOffline] = useState(false);

  const checkConnectionAndLoad = async () => {
    const isConnected = await NetInfo.fetch().then(state => state.isConnected);

    if (!isConnected) {
      setIsOffline(true);
      const storedNews = (await props.getNews()) as DataProps[];
      setOfflineNews(storedNews);
    } else {
      setIsOffline(false);
      await props.createTable();
      apiLoader.news.length && props.insertNews(apiLoader.news);
    }
  };

  useEffect(() => {
    checkConnectionAndLoad();
  }, [apiLoader.news]);

  return {
    news: isOffline ? offlineNews : apiLoader.news,
    loading: apiLoader.loading,
    error: apiLoader.error,
    loadNews: apiLoader.loadNews,
    loadMore: apiLoader.loadMore,
    isLoadingMore: apiLoader.isLoadingMore,
    isOffline,
  };
};
