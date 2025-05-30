// Database
import { getDBConnection } from '../../connection';

export const deleteCategories = async () => {
  const db = await getDBConnection();

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM categories',
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
