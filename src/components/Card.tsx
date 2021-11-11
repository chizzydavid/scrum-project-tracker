import React, { ReactElement, ReactNode } from 'react';
import { TextVariant } from '../utils/constants';
import { Text } from './Text';

export type CardProps = {
  title?: string;
  actions?: ReactElement[];
  children?: ReactNode;
  className?: string;
};
export function Card({ title, actions, children, className = '' }: CardProps) {
  return (
    <div
      className={`
        bg-white 
        rounded-xl p-4 
        shadow-md 
        ${className}
    `}
    >
      {title ? (
        <div className="mb-5">
          <Text variant={TextVariant.label}>{title}</Text>
        </div>
      ) : null}
      {/* Content */}
      <div className="">{children}</div>
      {/* Actions */}
      {actions?.length ? (
        <div className="flex items-center justify-end gap-4 mt-5">
          {actions.map((a, aIdx) => React.cloneElement(a, { key: `ca-${aIdx}` }))}
        </div>
      ) : null}
    </div>
  );
}
