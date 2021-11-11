import { TODOListActionsContext } from '../context/TODOList';
import { useContext } from 'react';

function useItemActions() {
  const { 
    addItem, 
    removeItem, 
    moveItem, 
    removeCategoryItems 
  } = useContext(TODOListActionsContext);
  return { addItem, removeItem, moveItem, removeCategoryItems };
}

export default useItemActions;
