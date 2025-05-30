// Database
import { getDBConnection } from '../../connection';

// Interfaces
import { DataProps } from '../../../interfaces/DataProps';

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
