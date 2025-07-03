// Interfaces
import {DataProps} from '../interfaces/DataProps';

// Services
import {api} from './newsApi';

export const getRelatedNews = async (props: {
  title: string;
  setData: React.Dispatch<React.SetStateAction<DataProps[]>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}) => {
  try {
    const response = await api.get('/top-headlines', {
      params: {
        q: props.title.split(' ')[0],
        pageSize: 5,
        page: 1,
      },
    });
    props.setData(response.data.articles);
  } catch (err: any) {
    throw err;
  }
};
