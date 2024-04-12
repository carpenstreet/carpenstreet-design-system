import React from 'react';
import MenuItem from '../MenuItem/MenuItem.tsx';
import Select from './Select.tsx';
import { SelectProps } from './Select.types.ts';

const items = ['카카카카카', '펜펜펜펜펜', '스스스스스', '트트트트트', '맅맅맅맅맅'];

export default function ExampleSelect(props: SelectProps) {
  const [select, setSelect] = React.useState('');
  function handleChange({ target: { value } }: React.ChangeEvent<HTMLInputElement>) {
    setSelect(value);
  }
  return (
    <Select {...props} value={select} onChange={handleChange}>
      {items.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
}
