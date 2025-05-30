// Database
import { getDBConnection } from '../../connection';

// Interfaces
import { DataProps } from '../../../interfaces/DataProps';

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
        }
      );
    });
  });
};
