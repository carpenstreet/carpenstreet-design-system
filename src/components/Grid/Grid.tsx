import React from 'react';
import { Grid as MUIGrid } from '@mui/material';
import { GridPropsType } from '@components/Grid/Grid.types.ts';

export const GridContainer = ({ children }: GridPropsType) => {
  return (
    <MUIGrid container columns={{ mobile: 4, desktop: 12 }}>
      {children}
    </MUIGrid>
  );
};

export const GridItem = ({ children }: GridPropsType) => {
  return <MUIGrid item>{children}</MUIGrid>;
};
