// Database
import { getDBConnection } from '../connection';

// Interfaces
import { DataProps } from '../../interfaces/DataProps';

export const insertSavedNews = async (props: DataProps) => {
  const db = await getDBConnection();

  return db.executeSql(
    'INSERT INTO saved (sourceName, author, title, description, url, urlToImage, publishedAt, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      props.id,
      props.sourceName,
      props.author,
      props.title,
      props.description,
      props.url,
      props.urlToImage,
      props.publishedAt,
      props.content,
    ]
  );
};

export const getSavedNews = async () => {
  const db = await getDBConnection();

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM saved',
        [],
        (_, result) => {
          const saved = [];
          for (let i = 0; i < result.rows.length; i++) {
            saved.push(result.rows.item(i));
          }
          resolve(saved);
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const removeSavedNews = async (
  id: number
) => {
  const db = await getDBConnection();
  return db.executeSql(
    'DELETE FROM saved WHERE id = ?',
    [id]
  );
};
