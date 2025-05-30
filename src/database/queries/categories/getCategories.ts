// Database
import { getDBConnection } from '../../connection';

export const getCategories = async () => {
  const db = await getDBConnection();

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM categories',
        [],
        (_, result) => {
          const categories = [];
          for (let i = 0; i < result.rows.length; i++) {
            categories.push(result.rows.item(i));
          }
          resolve(categories);
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};
