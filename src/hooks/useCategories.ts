import { TODOCategoriesContext } from '../context/TODOCategories';
import { useContext } from 'react';

export default function useCategories(): TodoCategory[] {
  const { categories } = useContext(TODOCategoriesContext);
  return categories;
}
