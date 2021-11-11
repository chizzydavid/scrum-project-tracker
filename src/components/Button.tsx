import React, { HTMLProps } from 'react';

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  onClick?: () => void;
};

export function Button({
  className = '',
  onClick,
  type,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      onClick={onClick ? () => onClick() : undefined}
      className={`
        border-none 
        rounded-xl py-1 px-4 
        bg-brand-primary-1 disabled:bg-grey-2 
        text-brand-primary-2 disabled:text-brand-green-soft 
        drop-shadow-lg hover:drop-shadow-sm disabled:drop-shadow-none 
        flex items-center justify-center 
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
