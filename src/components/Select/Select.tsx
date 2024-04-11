import React from 'react';
import { InputLabel as MUIInputLabel, FormControl as MUIFormControl, Select as MUISelect, SelectChangeEvent } from '@mui/material';
import MenuItem from '../MenuItem/MenuItem.tsx';
import ChevronDownIcon from '../Icon/ChevronDown/ChevronDownIcon.tsx';
import TextField from '../Textfield/TextField.tsx';
import { SelectProps } from './Select.types.ts';
import { TextFieldProps } from '../Textfield/TextField.types.ts';

const items = ['aaaaa', 'bbbbb', 'cccc'];

export default function Select(props: SelectProps & Pick<TextFieldProps, 'label' | 'value' | 'onChange' | 'size'>) {
  const { label, value, onChange, size, sx, ...SelectProps } = props;

  return (
    <TextField variant={'outlined'} select={true} size={size} label={label} sx={sx} value={value} onChange={onChange} SelectProps={SelectProps}>
      {items.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </TextField>
  );
}
