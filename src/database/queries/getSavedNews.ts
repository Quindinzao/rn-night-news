import { getDBConnection } from '../connection';

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
