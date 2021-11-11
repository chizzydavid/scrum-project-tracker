import { TODOCategoryActionsContext } from '../context/TODOCategories';
import { useContext } from 'react';

function useCategoryActions() {
  const { addCategory, removeCategory } = useContext(
    TODOCategoryActionsContext
  );
  return { addCategory, removeCategory };
}

export default useCategoryActions;
