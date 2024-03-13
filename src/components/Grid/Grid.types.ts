import { GridDirection, GridProps } from '@mui/material/Grid/Grid';

export type GridContainerPropsType = {
  direction?: GridDirection;
} & Pick<GridProps, 'sx' | 'children'>;

export type GridItemPropsType = Omit<GridProps, 'item'>;
