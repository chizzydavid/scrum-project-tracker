import useCategories from '../hooks/useCategories';
import useItemActions from '../hooks/useItemActions';
import useItems from '../hooks/useItems';
import { TextVariant } from '../utils/constants';
import { Button } from './Button';
import { Card } from './Card';
import { Text } from './Text';

export type ItemsProps = {
  category: string;
  className?: string;
};

export function Items({ category, className = '' }: ItemsProps) {
  const items = useItems();
  const categories = useCategories();
  const { removeItem, moveItem } = useItemActions();

  const handleDeleteItem = (item: TodoListItem) => {
    removeItem(item.key);
  }

  const handleMoveItem = (item: TodoListItem, direction: string) => {
    const categoryIdx = categories.findIndex((cat) => cat.title === item.category);
    if (categoryIdx < 0) return;
    let newCategory;

    if (direction === 'right') {
      newCategory = categories[categoryIdx + 1];
    } else {
      newCategory = categories[categoryIdx - 1]
    }
    if (!newCategory) return;
    moveItem(item.key, newCategory.title)
  }

  return (
    <>
      {items
        .filter((it) => it.category === category)
        .map((it, idx) => (
          <Card
            key={`cc-${idx}`}
            className={`${className}`}
            actions={[
              <Button onClick={() => handleDeleteItem(it)}> {'-'} </Button>,
              <Button onClick={() => handleMoveItem(it, 'left')}> {'<'} </Button>,
              <Button onClick={() => handleMoveItem(it, 'right')}> {'>'} </Button>,
            ]}
          >
            {it.description.split('\n').map((l, lIdx) => (
              <Text variant={TextVariant.body} key={`cl-${lIdx}`}>
                {l}
              </Text>
            ))}
          </Card>
        ))}
    </>
  );
}
