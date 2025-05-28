// Database
import { getDBConnection } from '../connection';

export const removeSavedNews = async (
  id: number
) => {
  const db = await getDBConnection();
  return db.executeSql(
    'DELETE FROM saved WHERE id = ?',
    [id]
  );
};
