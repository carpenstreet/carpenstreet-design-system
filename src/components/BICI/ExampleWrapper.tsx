import { Box } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';

export default function ExampleWrapper({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette['color/gray/400'],
        width: 'fit-content',
        borderRadius: '16px',
        padding: '16px',
      }}
    >
      {children}
    </Box>
  );
}
