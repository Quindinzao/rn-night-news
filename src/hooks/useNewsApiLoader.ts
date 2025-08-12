/* eslint-disable react-hooks/exhaustive-deps */
// External Libraries
import {useEffect, useState, useCallback} from 'react';

// Interfaces
import {DataProps} from '../interfaces/DataProps';
import {NewsApiProps} from '../interfaces/NewsProps';

// Services
import {api} from '../services/newsApi';

export const useNewsApiLoader = (props: NewsApiProps) => {
  const [news, setNews] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadNews = useCallback(
    async (isLoadMore = false) => {
      try {
        if (
          props.typeNews === 'byCategory' &&
          (!props.params.category || props.params.category.trim() === '')
        ) {
          setLoading(false);
          setIsLoadingMore(false);
          return;
        }

        if (!isLoadMore) {
          setLoading(true);
          setPage(1);
        } else {
          setIsLoadingMore(true);
        }

        const response = await api.get(props.urlName, {
          params: {
            ...props.params,
            page: isLoadMore ? page + 1 : 1,
          },
        });

        const articles = response.data.articles ?? [];
        const flatArticles: DataProps[] = articles.map((article: any) => ({
          sourceName: article.source?.name ?? null,
          author: article.author ?? null,
          title: article.title ?? null,
          description: article.description ?? null,
          url: article.url ?? null,
          urlToImage: article.urlToImage ?? null,
          publishedAt: article.publishedAt ?? null,
          content: article.content ?? null,
          typeNews: props.typeNews,
        }));

        if (isLoadMore) {
          setNews(prev => [...prev, ...flatArticles]);
          setPage(prev => prev + 1);
        } else {
          setNews(flatArticles);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
        setIsLoadingMore(false);
      }
    },
    [props, page],
  );

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
