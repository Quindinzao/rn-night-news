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

const Routes = () => {
  const { isTableReady, hasCategories, refresh } = useCategoriesContext();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await refresh();
      } catch (err: any) {
        console.error('Erro ao preparar app:', err.message);
      } finally {
        setIsReady(true);
      }
    };

    prepare();
  }, []);

  useEffect(() => {
    if (isReady && isTableReady) {
      BootSplash.hide({ fade: true });
    }
  }, [isReady, isTableReady]);

  if (!isReady || !isTableReady) {
    return null;
  }

  return (
    <NavigationContainer>
      {hasCategories ? <AppStack /> : <CategoryStack />}
    </NavigationContainer>
  );
};

export default Routes;

