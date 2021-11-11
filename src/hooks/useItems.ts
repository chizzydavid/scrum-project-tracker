import { TODOListContext } from '../context/TODOList';
import { useContext, useMemo } from 'react';

type OwnProps = { categoryKey?: string };
export default function useItems(props?: OwnProps): TodoListItem[] {
  const { categoryKey } = props || {};
  const { items } = useContext(TODOListContext);

  const filtered = useMemo(
    () =>
      !categoryKey ? items : items.filter((it) => it.category === categoryKey),
    [items, categoryKey]
  );
  return filtered;
}
