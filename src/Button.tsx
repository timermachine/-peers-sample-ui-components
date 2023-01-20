import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'teritiary';
}

export const Button = ({
  children = 'Button',
  variant = 'primary',
  ...props
}: Props) => {
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
