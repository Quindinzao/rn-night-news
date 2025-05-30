// External Libraries
import { Alert } from 'react-native';

// Database
import { getDBConnection } from '../../connection';

export const insertCategories = async (categories: string[]): Promise<void> => {
  const db = await getDBConnection();

  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        categories.forEach(category => {
          tx.executeSql(
            'INSERT INTO categories (categoryName) VALUES (?)',
            [category]
          );
        });
      },
      error => {
        Alert.alert('Error:', error.message);
        reject(error);
      },
      () => {
        resolve();
      }
    );
  });
};
