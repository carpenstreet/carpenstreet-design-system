import React from 'react';
import { Grid as MUIGrid } from '@mui/material';
import { GridContainerPropsType, GridItemPropsType } from '@components/Grid/Grid.types';

export const GridContainer = ({ children, sx, direction }: GridContainerPropsType) => {
  const gridContainerStyle = {
    maxWidth: '1360px',
    padding: {
      mobile: '0 16px',
      desktop: '0 40px',
    },
    ...sx,
  };

  return (
    <MUIGrid container columns={{ mobile: 4, desktop: 12 }} spacing={12} direction={direction} sx={gridContainerStyle}>
      {children}
    </MUIGrid>
  );
};

export const GridItem = ({ children, ...gridItemProps }: GridItemPropsType) => {
  return (
    <MUIGrid item {...gridItemProps}>
      {children}
    </MUIGrid>
  );
};
