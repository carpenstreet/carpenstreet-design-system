import React from 'react';
import { Box } from '@mui/material';
import MenuItem from './MenuItem.tsx';
import { MenuItemProps } from './MenuItem.types.ts';

export default function ExampleMenuItem({ children, ...rest }: MenuItemProps) {
  return (
    <Box
      sx={{
        borderWidth: '1px',
        borderColor: 'color/gray/100',
        borderStyle: 'solid',
        borderRadius: '4px',
        width: 'fit-content',
      }}
    >
      <MenuItem {...rest}>{children}</MenuItem>
    </Box>
  );
}
