import { createContext, ReactNode, useCallback, useState, useEffect } from 'react';
import { getItem, saveItem } from '../utils/storage';

export const TODOCategoriesContext = createContext<TodoCategoryState>({
  categories: [],
});

export const TODOCategoryActionsContext = createContext<TodoCategoryActions>({
  addCategory: (category) => {},
  removeCategory: (key) => {},
});

export type TODOCategoriesProviderProps = { children?: ReactNode };

const DefaultCategories: TodoCategory[] = [
  { key: 'req', title: 'Requirements' },
  { key: 'prog', title: 'In Progress' },
  { key: 'done', title: 'Complete' },
];

export function TODOCategoriesProvider({
  children,
}: TODOCategoriesProviderProps) {
  const [categories, setCategories] = useState<TodoCategory[]>(
    getItem<TodoCategory[]>('categories') || []
  );

  const saveCategories = (cats: TodoCategory[]) => {
    setCategories([...cats]);
    saveItem<TodoCategory[]>('categories', cats);
  };

  const addCategory = useCallback(
    (category: TodoCategory) => {
      const newCategories = [ ...categories, category ];
      saveCategories(newCategories);
    },
    [categories]
  );

  const removeCategory = useCallback(
    (key: string) => {
      saveCategories(categories.filter((cat) => cat.key !== key))
    },
    [categories]
  );

  useEffect(() => {
    const storedCategories = getItem<TodoCategory[]>('categories');
    if (!storedCategories || storedCategories.length === 0) {
      saveItem<TodoCategory[]>('categories', DefaultCategories);
      setCategories(DefaultCategories);
    }
  }, [])

  return (
    <TODOCategoryActionsContext.Provider
      value={{ addCategory, removeCategory }}
    >
      <TODOCategoriesContext.Provider value={{ categories }}>
        {children}
      </TODOCategoriesContext.Provider>
    </TODOCategoryActionsContext.Provider>
  );
}
