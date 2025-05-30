// External Libraries
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Alert } from 'react-native';

// Database
import { createTableCategories } from '../database/tables/categoriesTable';
import { getCategories } from '../database/queries/categories/getCategories';
import { insertCategories } from '../database/queries/categories/insertCategories';
import { deleteCategories } from '../database/queries/categories/deleteCategories';

interface CategoriesContextType {
  isTableReady: boolean;
  data: {id: number, categoryName: string} | null;
  refresh: () => Promise<void>;
  saveCategories: (selected: string[]) => Promise<boolean>;
  error: string | null;
}

const CategoriesContext = createContext<CategoriesContextType>({
  isTableReady: false,
  data: null,
  refresh: async () => {},
  saveCategories: async () => false,
  error: null,
});

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [isTableReady, setIsTableReady] = useState(false);
  const [data, setData] = useState<{id: number, categoryName: string} | null>(null);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    try {
      await createTableCategories();
      setIsTableReady(true);

      const result = await getCategories();
      const categories = result as { id: number; categoryName: string }[];
      setData(categories[0]);
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
        data,
        refresh,
        saveCategories,
        error,
      }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => useContext(CategoriesContext);
