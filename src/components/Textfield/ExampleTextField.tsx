import { Box } from '@mui/material';
import TextField from './TextField.tsx';
import { TextFieldProps } from './TextField.types.ts';
import React from 'react';

export default function ExampleTextField(props: TextFieldProps) {
  const [value, setValue] = React.useState('');
  function handleChange({ target: { value } }: React.ChangeEvent<HTMLInputElement>) {
    setValue(value);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '48px',
      }}
    >
      <TextField
        {...props}
        value={value}
        onChange={handleChange}
        InputProps={{
          startAdornment: undefined,
          endAdornment: undefined,
        }}
      />
      <TextField {...props} value={value} onChange={handleChange} />
    </Box>
  );
}
