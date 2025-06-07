import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const STORAGE_KEY = '@selectedCategory';

interface CategoryContextType {
  isReady: boolean;
  selectedCategory: string | null;
  saveCategory: (category: string) => Promise<boolean>;
  refresh: () => Promise<void>;
  error: string | null;
}

const CategoryContext = createContext<CategoryContextType>({
  isReady: false,
  selectedCategory: null,
  saveCategory: async () => false,
  refresh: async () => {},
  error: null,
});

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      setSelectedCategory(value || null);
      setIsReady(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const saveCategory = async (category: string): Promise<boolean> => {
    if (!category) {
      Alert.alert('Hey,', 'You must provide a valid category');
      return false;
    }

    try {
      await AsyncStorage.setItem(STORAGE_KEY, category);
      setSelectedCategory(category);
      return true;
    } catch (err: any) {
      setError(err.message);
      Alert.alert('Oops!', 'Error saving category. Try again later.');
      return false;
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        isReady,
        selectedCategory,
        saveCategory,
        refresh,
        error,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategoryContext must be used within CategoryProvider');
  }
  return context;
};
