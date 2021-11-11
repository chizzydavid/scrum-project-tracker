import React, { ReactElement, ReactNode } from 'react';
import { TextVariant } from '../utils/constants';
import { Text } from './Text';

export type ContentColumnProps = {
  title: string;

  actions?: ReactElement[];
  first?: boolean;
  last?: boolean;

  className?: string;
  children?: ReactNode;
};

export function ContentColumn({
  title,

  actions,
  first,
  last,

  children,
  className = '',
}: ContentColumnProps) {
  return (
    <div
      className={`
        ${first ? '' : 'border-l-px'} ${last ? 'border-r-px' : ''} 
        ${className}
      `}
    >
      <div className="px-4 flex items-center justify-between">
        <Text variant={TextVariant.header} className="text-brand-primary-2">
          {title}
        </Text>
        {actions?.length ? (
          <div className="flex items-center justify-end gap-4">
            {actions.map((a, aIdx) =>
              React.cloneElement(a, { key: `cca-${aIdx}` })
            )}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-8 px-10 mt-8">{children}</div>
    </div>
  );
}
