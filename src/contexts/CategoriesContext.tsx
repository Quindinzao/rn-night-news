// External Libraries
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Alert } from 'react-native';

// Datavase
import { createTableCategories } from '../database/tables/categoriesTable';
import { getCategories } from '../database/queries/getCategories';
import { insertCategories } from '../database/queries/insertCategories';
import { deleteCategories } from '../database/queries/deleteCategories';

interface CategoriesContextType {
  isTableReady: boolean;
  hasCategories: boolean;
  refresh: () => Promise<void>;
  saveCategories: (selected: string[]) => Promise<boolean>;
  error: string | null;
}

const CategoriesContext = createContext<CategoriesContextType>({
  isTableReady: false,
  hasCategories: false,
  refresh: async () => {},
  saveCategories: async () => false,
  error: null,
});

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [isTableReady, setIsTableReady] = useState(false);
  const [hasCategories, setHasCategories] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    try {
      await createTableCategories();
      setIsTableReady(true);

      const result = await getCategories();
      const categories = result as { categoryName: string }[];
      setHasCategories(categories.length > 0);
    } catch (err: any) {
      console.error('[CategoriesContext] Erro ao inicializar:', err.message);
      setError(err.message);
    }
  };

  const saveCategories = async (selected: string[]): Promise<boolean> => {
    if (selected.length === 0) {
      Alert.alert('Hey,', 'You have to select at least one category');
      return false;
    }

    try {
      await deleteCategories();
      await insertCategories(selected);
      await refresh();
      return true;
    } catch (err: any) {
      console.error('[CategoriesContext] Erro ao salvar categorias:', err.message);
      setError(err.message);
      Alert.alert('Oops!', 'Error saving categories. Try again later.');
      return false;
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        isTableReady,
        hasCategories,
        refresh,
        saveCategories,
        error,
      }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => useContext(CategoriesContext);
