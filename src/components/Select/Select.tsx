import React from 'react';
import { InputLabel as MUIInputLabel, FormControl as MUIFormControl, Select as MUISelect, SelectChangeEvent } from '@mui/material';
import MenuItem from '../MenuItem/MenuItem.tsx';
import ChevronDownIcon from '../Icon/ChevronDown/ChevronDownIcon.tsx';

type sth = 'a' | 'b' | 'c';

const items = ['aaaaa', 'bbbbb', 'cccc'];

export default function Select() {
  const [value, setValue] = React.useState<'a' | 'b' | 'c'>(null);
  function handleChange(e: SelectChangeEvent) {
    setValue(e.target.value as sth);
  }
  return (
    <MUIFormControl>
      <MUIInputLabel>label</MUIInputLabel>
      <MUISelect value={value} onChange={handleChange} label={'label'} sx={{ width: '400px' }} IconComponent={ChevronDownIcon}>
        {items.map((item, index) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </MUISelect>
    </MUIFormControl>
  );
}
