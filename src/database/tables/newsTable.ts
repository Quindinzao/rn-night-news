// Database
import {getDBConnection} from '../connection';

export const createTableNews = async () => {
  const db = await getDBConnection();

  const query = `
    CREATE TABLE IF NOT EXISTS news (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sourceName TEXT,
      author TEXT,
      title TEXT,
      description TEXT,
      url TEXT,
      urlToImage TEXT,
      publishedAt TEXT,
      content TEXT,
      typeNews TEXT
    );
  `;

  return db.executeSql(query);
};
