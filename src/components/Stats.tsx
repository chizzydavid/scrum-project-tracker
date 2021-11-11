import React from 'react';
import { TextVariant } from '../utils/constants';
import { AddCategory } from './AddCategory';
import { AddItem } from './AddItem';
import { DataUtils } from './DataUtils';
import { Text } from './Text';

export type StatsProps = { className?: string };

export function Stats({ className }: StatsProps) {
  return (
    <div className={`border-r-px ${className}`}>
      <Text variant={TextVariant.header} className="text-brand-green-soft mb-4">
        Stats
      </Text>

      <div className="px-4 flex flex-col gap-10">
        <div>
          <Text className="mb-2" underline variant={TextVariant.body}>
            Categories
          </Text>
          <div className="grid grid-cols-2 grid-rows-1">
            <Text variant={TextVariant.label}>Total</Text>
            <Text variant={TextVariant.button}>{}</Text>
          </div>
          <AddCategory className="mt-4" />
        </div>
        <div>
          <Text className="mb-2" underline variant={TextVariant.body}>
            Items
          </Text>
          <div className="grid grid-cols-2 grid-rows-1">
            <Text variant={TextVariant.label}>Total</Text>
            <Text variant={TextVariant.button}>{}</Text>
          </div>
          <AddItem className="mt-4" />
        </div>

        <div>
          <Text className="mb-2" underline variant={TextVariant.body}>
            Data
          </Text>
          <DataUtils />
        </div>
      </div>
    </div>
  );
}
