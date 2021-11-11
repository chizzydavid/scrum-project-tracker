type TodoListItem = {
  key: string;
  category: string;
  description: string;
};

type TodoListState = {
  items: TodoListItem[];
};

type TodoListActions = {
  addItem: (
    item: Omit<TodoListItem, 'category' | 'key'> & { category?: string }
  ) => void;
  removeItem: (key: string) => void;
  moveItem: (key: string, category: string) => void;
  removeCategoryItems: (category: string) => void;
};

type TodoCategory = {
  title: string;
  key: string;
};

type TodoCategoryState = {
  categories: TodoCategory[];
};

type TodoCategoryActions = {
  addCategory: (category: TodoCategory) => void;
  removeCategory: (key: string) => void;
};
