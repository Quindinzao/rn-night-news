/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

// Routes
import AppStack from './stacks/app.routes';
import CategoryStack from './stacks/category.routes';

// Contexts
import { useCategoriesContext } from '../contexts/CategoriesContext';
import { useNewsContext } from '../contexts/NewsContext';

const Routes = () => {
  const { byCategoryLoader, everythingLoader, headlinesLoader } = useNewsContext();
  const categoryContext = useCategoriesContext();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    prepare();
  }, []);

  const prepare = async () => {
    try {
      await categoryContext.refresh();
    } catch (err: any) {
      console.error('Erro ao preparar app:', err.message);
    } finally {
      setIsReady(true);
    }
  };

  useEffect(() => {
    if (
      isReady &&
      categoryContext.isTableReady &&
      byCategoryLoader.news &&
      everythingLoader.news &&
      headlinesLoader.news
    ) {
      BootSplash.hide({ fade: true });
    }
  }, [
    isReady,
    categoryContext.isTableReady,
    byCategoryLoader.news,
    headlinesLoader.news,
    headlinesLoader.news,
  ]);

  if (!isReady || !categoryContext.isTableReady) {
    return null;
  }

  return (
    <NavigationContainer>
      {categoryContext.data ? <AppStack /> : <CategoryStack />}
    </NavigationContainer>
  );
};

export default Routes;
