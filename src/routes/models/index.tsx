import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { DataProps } from '../../interfaces/DataProps';

export type propsNavigationStack = {
  FavoriteCategories: undefined;
  TabRoutes: undefined;
  Home: undefined;
  NewsDetail: {
    newsDetail: DataProps;
  };
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>

export type propsNewsDetail = NativeStackScreenProps<
  propsNavigationStack,
  'NewsDetail'
>
