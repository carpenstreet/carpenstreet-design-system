import { GridProps } from '@mui/material/Grid/Grid';

export type GridContainerPropsType = Pick<GridProps, 'sx' | 'children' | 'direction'>;

export type GridItemPropsType = Omit<GridProps, 'item'>;
