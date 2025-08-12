// External libraries
import {ResultSet, Transaction} from 'react-native-sqlite-storage';

// Interfaces
import {DataProps} from './DataProps';

export interface NewsProps extends NewsApiProps {
  createTable: () => Promise<[ResultSet]>;
  insertNews: (articles: DataProps[]) => Promise<Transaction | void>;
  getNews: () => Promise<unknown>;
}

export interface NewsApiProps {
  urlName: string;
  typeNews: 'everything' | 'byCategory' | 'headlines' | 'saved';
  params: any;
}
