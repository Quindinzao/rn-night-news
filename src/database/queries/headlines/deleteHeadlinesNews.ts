import { getDBConnection } from '../../connection';

export const deleteHeadlinesNews = async () => {
  const db = await getDBConnection();

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM headlines',
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
