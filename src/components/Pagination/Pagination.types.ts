import { PaginationProps } from '@mui/material/Pagination/Pagination';

export type PaginationPropsType = Omit<PaginationProps, 'size'> & {
  size: 'L' | 'M';
};
