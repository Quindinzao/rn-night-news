// Database
import { getDBConnection } from '../connection';

export const createTableCategories = async () => {
  const db = await getDBConnection();

  const query = `
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      categoryName TEXT
    );
  `;

  return db.executeSql(query);
};
