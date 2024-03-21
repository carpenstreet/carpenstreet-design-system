import React from 'react';
import { Grid as MUIGrid } from '@mui/material';
import { GridProps } from '@mui/material/Grid/Grid';

export default function Grid(props: GridProps) {
  const { children, ...rest } = props;
  const { sx, container } = rest;

  const containerProps = {
    ...rest,
    ...(container && {
      container: true,
      columns: { mobile: 4, desktop: 12 },
      spacing: 12,
      sx: {
        maxWidth: '1360px',
        padding: {
          mobile: '0 16px',
          desktop: '0 40px',
        },
        ...sx,
      },
    }),
  };

  return <MUIGrid {...containerProps}>{children}</MUIGrid>;
}
