/* eslint-disable react-hooks/exhaustive-deps */
// External Libraries
import { useEffect, useState } from 'react';
import { ResultSet, Transaction } from 'react-native-sqlite-storage';

// Interfaces
import { DataProps } from '../interfaces/DataProps';

// Services
import { api } from '../services/newsApi';

interface NewsProps {
  urlName: string;
  params: any;
  createTable: () => Promise<[ResultSet]>;
  deleteNews: () => Promise<unknown>;
  insertNews: (articles: DataProps[]) => Promise<Transaction>;
  getNews: () => Promise<unknown>;
}

export const useNewsLoader = (props: NewsProps) => {
  const [news, setNews] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadNews = async (isLoadMore = false) => {
    try {
      if (!isLoadMore) {
        setLoading(true);
        await props.createTable();
      } else {
        setIsLoadingMore(true);
      }

      const response = await api.get(props.urlName, {
        params: {
          ...props.params,
          page: isLoadMore ? page + 1 : 1,
        },
      });

      const articles = response.data.articles;
      const flatArticles: DataProps[] = articles.map((article: any) => ({
        sourceName: article.source?.name ?? null,
        author: article.author ?? null,
        title: article.title ?? null,
        description: article.description ?? null,
        url: article.url ?? null,
        urlToImage: article.urlToImage ?? null,
        publishedAt: article.publishedAt ?? null,
        content: article.content ?? null,
      }));

      if (!isLoadMore) {
        await Promise.all([
          props.deleteNews(),
          props.insertNews(flatArticles),
        ]);
        const sqliteNews = await props.getNews() as DataProps[];
        setNews(sqliteNews);
      } else {
        setNews(prev => [...prev, ...flatArticles]);
        setPage(prev => prev + 1);
      }

    } catch (err: any) {
      try {
        const offlineNews = await props.getNews() as DataProps[];
        setNews(offlineNews);
      } catch (sqliteError: any) {
        setError(sqliteError.message);
      }
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  return {
    news,
    loading,
    error,
    loadNews,
    loadMore: () => loadNews(true),
    isLoadingMore,
  };
};
