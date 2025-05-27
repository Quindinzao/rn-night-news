import { DataProps } from '../../interfaces/DataProps';
import { getDBConnection } from '../connection';

export const insertEverythingMultipleNews = async (articles: DataProps[]) => {
  const db = await getDBConnection();

  return db.transaction(tx => {
    articles.forEach(article => {
      tx.executeSql(
        `INSERT INTO everything 
          (sourceName, author, title, description, url, urlToImage, publishedAt, content) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          article.sourceName,
          article.author,
          article.title,
          article.description,
          article.url,
          article.urlToImage,
          article.publishedAt,
          article.content,
        ]
      );
    });
  });
};
