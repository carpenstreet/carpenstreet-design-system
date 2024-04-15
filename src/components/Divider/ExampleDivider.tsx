import React from 'react';
import { Box } from '@mui/material';
import Divider from './Divider.tsx';
import { DividerPropsType } from './Divider.types.ts';

export default function ExampleDivider(props: DividerPropsType) {
  return (
    <Box sx={{ width: '100px', height: '100px', padding: '10px' }}>
      <Divider {...props} />
    </Box>
  );
}
