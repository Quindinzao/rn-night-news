// Database
import { getDBConnection } from '../connection';

// Interfaces
import { DataProps } from '../../interfaces/DataProps';

export const insertByCategoryMultipleNews = async (articles: DataProps[]) => {
  const db = await getDBConnection();

  return db.transaction(tx => {
    articles.forEach(article => {
      tx.executeSql(
        `INSERT INTO byCategory 
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

export const getByCategoryNews = async () => {
  const db = await getDBConnection();

  return new Promise<DataProps[]>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM byCategory',
        [],
        (_, result) => {
          const everything: DataProps[] = [];

          for (let i = 0; i < result.rows.length; i++) {
            const row = result.rows.item(i);
            everything.push(row);
          }

          resolve(everything);
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const deleteByCategoryNews = async () => {
  const db = await getDBConnection();

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM byCategory',
        [],
        () => resolve(true),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};
