/* eslint-disable react-hooks/exhaustive-deps */
// External Libraries
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

// Routes
import AppStack from './stacks/app.routes';
import CategoryStack from './stacks/category.routes';

// Contexts
import { useCategoryContext } from '../contexts/CategoryContext';
import { useNewsContext } from '../contexts/NewsContext';

// Database
import { createTableSaved } from '../database/tables/savedTable';

const Routes = () => {
  const { byCategoryLoader, everythingLoader, headlinesLoader } = useNewsContext();
  const { selectedCategory, refresh } = useCategoryContext();
  const [isReady, setIsReady] = useState(false);

  const prepare = async () => {
    try {
      await createTableSaved();
      await refresh();
    } catch (err: any) {
      console.error('Erro ao preparar app:', err.message);
    } finally {
      setIsReady(true);
    }
  };

  useEffect(() => {
    prepare();
  }, []);

  useEffect(() => {
    if (
      isReady &&
      byCategoryLoader.news &&
      everythingLoader.news &&
      headlinesLoader.news
    ) {
      BootSplash.hide({ fade: true });
    }
  }, [
    isReady,
    byCategoryLoader.news,
    everythingLoader.news,
    headlinesLoader.news,
  ]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer>
      {selectedCategory !== null ? <AppStack /> : <CategoryStack />}
    </NavigationContainer>
  );
};

export default Routes;
