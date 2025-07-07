// External libraries
import {ResultSet, Transaction} from 'react-native-sqlite-storage';

// Interfaces
import {DataProps} from './DataProps';

export interface NewsProps {
  urlName: string;
  typeNews: 'everything' | 'byCategory' | 'headlines' | 'saved';
  params: any;
  createTable: () => Promise<[ResultSet]>;
  insertNews: (articles: DataProps[]) => Promise<Transaction | void>;
  getNews: () => Promise<unknown>;
}
