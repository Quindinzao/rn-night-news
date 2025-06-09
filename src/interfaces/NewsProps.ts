// External libraries
import { ResultSet, Transaction } from 'react-native-sqlite-storage';

// Interfaces
import { DataProps } from './DataProps';

export interface NewsProps {
  urlName: string;
  params: any;
  createTable: () => Promise<[ResultSet]>;
  deleteNews: () => Promise<unknown>;
  insertNews: (articles: DataProps[]) => Promise<Transaction>;
  getNews: () => Promise<unknown>;
}
