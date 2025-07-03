// External libraries
import {ResultSet, Transaction} from 'react-native-sqlite-storage';

// Interfaces
import {DataProps} from './DataProps';

export interface NewsProps {
  urlName: string;
  tableName: string;
  params: any;
  createTable: () => Promise<[ResultSet]>;
  insertNews: (articles: DataProps[]) => Promise<Transaction | void>;
  getNews: () => Promise<unknown>;
}
