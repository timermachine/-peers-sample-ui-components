import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** provide text or any innerHtml to button */
  children: ReactNode;
  /** styling variants */
  variant: 'primary' | 'secondary';
}
/** Button example */
export const Button = ({ children, variant, ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'green',
        color: 'white',
      }}
    >
      {children}
    </button>
  );
};
