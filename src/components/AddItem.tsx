import useCategories from '../hooks/useCategories';
import useItemActions from '../hooks/useItemActions';
import { ChangeEvent, useState } from 'react';
import { TextVariant } from '../utils/constants';
import { Button } from './Button';
import { Card } from './Card';
import { Text } from './Text';

export type AddItemProps = { className?: string };
type AddItemState = {
  description: string;
  category: string;
}

export function AddItem({ className = '' }: AddItemProps) {
  const { addItem } = useItemActions();
  const categories = useCategories();
  const initialState = {
    description: '',
    category: ''
  }

  const [formValues, setFormValues] = useState<AddItemState>(initialState);
  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      description: event.target.value
    });
  }

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      category: event.target.value
    });
  }
  
  const clearForm = () => {
    setFormValues(initialState)
  }  

  const handleOnSubmit = () => {
    if (!formValues.description) {
      return; 
    }
    addItem(formValues);
    clearForm();
  }

  return (
    <Card
      title="New Item"
      className={` ${className}`}
      actions={[
        <Button onClick={clearForm}>Clear</Button>, 
        <Button onClick={handleOnSubmit}>Save</Button>
      ]}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Text variant={TextVariant.body}>Description *</Text>
          <textarea 
            value={formValues.description}
            onChange={handleDescriptionChange}
            rows={5} 
            className="px-1 rounded-md border-px" 
          />
        </div>

        <div className="grid gap-4 grid-cols-2 grid-rows-1">
          <Text variant={TextVariant.body}>Category</Text>
          <select 
            className="px-1 rounded-md border-px"
            onChange={handleCategoryChange}
            value={formValues.category}
          > 
            {categories.map((cat, cIdx) => 
              <option key={cIdx} value={cat.title}> {cat.title} </option>)
            }
          </select>
        </div>
      </div>
    </Card>
  );
}
