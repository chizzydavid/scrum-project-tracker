import React, { ReactNode, useMemo } from 'react';
import { TextVariant } from '../utils/constants';

export type TextProps = {
  variant?: TextVariant;
  children: ReactNode;

  underline?: boolean;

  className?: string;
};

export function Text({
  variant = TextVariant.body,
  className = '',
  underline,
  children,
}: TextProps) {
  const RenderComponent = useMemo(
    () => (variant === TextVariant.header ? <h3 /> : <p />),
    [variant]
  );

  return React.cloneElement(RenderComponent, {
    className: `
        ${underline ? 'underline underline-offset-4' : ''}
        ${
          variant === TextVariant.header
            ? 'text-title6'
            : variant === TextVariant.label
            ? 'text-label'
            : 'text-body'
        } 
        ${
          [TextVariant.header, TextVariant.button].includes(variant)
            ? 'font-bold'
            : 'font-normal'
        } 
        ${className}
    `,
    children,
  });
}
