// External libraries
import {Transaction} from 'react-native-sqlite-storage';

// Database
import {getDBConnection} from '../connection';

// Interfaces
import {DataProps} from '../../interfaces/DataProps';

export const insertEverythingMultipleNews = async (articles: DataProps[]) => {
  const db = await getDBConnection();

  return new Promise<Transaction | void>((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql('DELETE FROM everything');

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
            ],
          );
        });
      },
      error => {
        console.error('[replaceEverythingNews] Transaction failed:', error);
        reject(error);
      },
      () => {
        resolve();
      },
    );
  });
};

export const getEverythingNews = async () => {
  const db = await getDBConnection();

  return new Promise<DataProps[]>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM everything',
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
        },
      );
    });
  });
};
