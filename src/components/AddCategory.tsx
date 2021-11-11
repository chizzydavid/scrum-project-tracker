import { ChangeEvent, useState } from 'react';
import useCategoryActions from '../hooks/useCategoryActions';
import { TextVariant } from '../utils/constants';
import { Button } from './Button';
import { Card } from './Card';
import { Text } from './Text';

export type AddCategoryProps = { className?: string };

export function AddCategory({ className = '' }: AddCategoryProps) {
  const { addCategory } = useCategoryActions();
  const initialState = {
    key: '',
    title: ''
  }  
  const [formValues, setFormValues] = useState(initialState);  

  const handleKeyInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      key: event.target.value
    });
  }

  const handleTitleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      title: event.target.value
    });
  }

  const clearForm = () => {
    setFormValues(initialState)
  }

  const handleOnSubmit = () => {
    if (!formValues.key || !formValues.title) {
      return; 
    }
    addCategory(formValues);
    clearForm();
  }

  return (
    <Card
      title="New Category"
      className={` ${className}`}
      actions={[
        <Button onClick={clearForm}>Clear</Button>, 
        <Button onClick={handleOnSubmit}>Save</Button>
      ]}
    >
      <div className="grid gap-4 grid-cols-2 grid-rows-2">
        <Text variant={TextVariant.body}>Key *</Text>
        <input 
          className="px-1 rounded-md border-px" 
          type='text' 
          name='key'
          value={formValues.key}
          onChange={handleKeyInputChange}
        />

        <Text variant={TextVariant.body}>Name *</Text>
        <input 
          className="px-1 rounded-md border-px" 
          type='text' 
          name='title'
          value={formValues.title} 
          onChange={handleTitleInputChange}          
        />
      </div>
    </Card>
  );
}
