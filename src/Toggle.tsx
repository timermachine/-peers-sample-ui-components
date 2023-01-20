import React, { InputHTMLAttributes, ReactNode } from 'react';
// import * as css from './toggleSwitch.css';
//ts to boilerplate tse?

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  id: string;
  label: string;
}
//or? interface Props = {};

export const Toggle = ({ id }: Props) => {
  return (
    <div className="toggler">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>Toggle</label>
    </div>
  );
};
