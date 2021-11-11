import { createContext, ReactNode, useCallback, useState } from 'react';
import { saveItem, getItem } from '../utils/storage';

export const TODOListContext = createContext<TodoListState>({
  items: [],
});

export const TODOListActionsContext = createContext<TodoListActions>({
  addItem: (item) => {},
  removeItem: (key) => {},
  moveItem: (key, category) => {},
  removeCategoryItems: (category) => {}
});

export type TODOListProviderProps = { children?: ReactNode };
export function TODOListProvider({ children }: TODOListProviderProps) {
  const [items, setItems] = useState<TodoListItem[]>(
    getItem<TodoListItem[]>('items') || []
  );

  /**
   * Saves the mutated array reference as a new reference
   * and also updates to storage
   */
  const saveItems = (items: TodoListItem[]) => {
    setItems(items.map((it, itIdx) => ({ ...it, key: `item-${itIdx}` })));
    saveItem<TodoListItem[]>('items', items);
  };

  const addItem = useCallback(
    (item: Omit<TodoListItem, 'category' | 'key'> & { category?: string }) => {
      const newItem = {
        description: item.description,
        category: item.category ? item.category : 'Requirements',
        key: ''
      }
      saveItems([...items, newItem]);
    },
    [items]
  );

  const removeItem = useCallback(
    (key: string) => {
      saveItems(items.filter((item) => item.key !== key));
    },
    [items]
  );

  const moveItem = useCallback(
    (key: string, category: string) => {
      const allItems = items;
      const itemIdx = allItems.findIndex((item) => item.key === key);
      if (itemIdx < 0) return;

      allItems[itemIdx].category = category;
      saveItems(allItems);
    },
    [items]
  );

  const removeCategoryItems = useCallback(
    (category: string) => {
      saveItems(items.filter((item) => item.category !== category))
    },
    [items]
  );

  return (
    <TODOListActionsContext.Provider 
        value={{ addItem, removeItem, moveItem, removeCategoryItems }}>
      <TODOListContext.Provider value={{ items }}>
        {children}
      </TODOListContext.Provider>
    </TODOListActionsContext.Provider>
  );
}
