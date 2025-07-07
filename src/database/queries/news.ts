// External libraries
import {Transaction} from 'react-native-sqlite-storage';

// Database
import {getDBConnection} from '../connection';

// Interfaces
import {DataProps} from '../../interfaces/DataProps';

export const insertNews = async (articles: DataProps[]) => {
  const db = await getDBConnection();

  return new Promise<Transaction | void>((resolve, reject) => {
    db.transaction(
      tx => {
        if (articles.length === 0) {
          return;
        }

        const typeNews = articles[0].typeNews;
        tx.executeSql('DELETE FROM news WHERE typeNews = ?', [typeNews]);

        articles.forEach(article => {
          tx.executeSql(
            `INSERT INTO news 
              (sourceName, author, title, description, url, urlToImage, publishedAt, content, typeNews) 
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              article.sourceName,
              article.author,
              article.title,
              article.description,
              article.url,
              article.urlToImage,
              article.publishedAt,
              article.content,
              article.typeNews,
            ],
          );
        });
      },
      error => {
        console.error('[replaceNews] Transaction failed:', error);
        reject(error);
      },
      () => {
        resolve();
      },
    );
  });
};

export const getNews = async (typeNews: string) => {
  const db = await getDBConnection();
  return new Promise<DataProps[]>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM news WHERE typeNews = ?',
        [typeNews],
        (_, result) => {
          const listReturned: DataProps[] = [];

          for (let i = 0; i < result.rows.length; i++) {
            const row = result.rows.item(i);
            listReturned.push(row);
          }

          resolve(listReturned);
        },
        (_, error) => {
          reject(error);
          return false;
        },
      );
    });
  });
};

export const getDetailedNews = async (typeNews: string) => {
  const db = await getDBConnection();
  return new Promise<DataProps[]>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM news WHERE typeNews = ?',
        [typeNews],
        (_, result) => {
          const listReturned: DataProps[] = [];

          for (let i = 0; i < result.rows.length; i++) {
            const row = result.rows.item(i);
            listReturned.push(row);
          }

          resolve(listReturned);
        },
        (_, error) => {
          reject(error);
          return false;
        },
      );
    });
  });
};
