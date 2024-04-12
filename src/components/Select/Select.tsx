import React from 'react';
import TextField from '../Textfield/TextField.tsx';
import { SelectProps } from './Select.types.ts';

export default function Select(props: SelectProps) {
  const { children, ...rest } = props;

  return (
    <TextField variant={'outlined'} select={true} {...rest}>
      {children}
    </TextField>
  );
}
