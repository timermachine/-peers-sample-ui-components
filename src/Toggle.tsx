import React, { HTMLAttributes, ReactNode } from 'react';
//ts to boilerplate tse?

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}
//or? interface Props = {};

export const Toggle = ({ children, variant, ...props }: Props) => {
  return <button {...props}>{children}</button>;
};
