import React from 'react';
import MuiPagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';
import Typography from '../Typography/Typography.tsx';
import { PaginationPropsType } from './Pagination.types.ts';
import ChevronLeftIcon from '../Icon/ChevronLeft/ChevronLeftIcon.tsx';
import ChevronRightIcon from '../Icon/ChevronRight/ChevronRightIcon.tsx';

export default function Pagination({ ...rest }: PaginationPropsType) {
  return (
    <MuiPagination
      {...rest}
      renderItem={(item) => {
        return (
          <PaginationItem
            {...item}
            slots={{ previous: ChevronLeftIcon, next: ChevronRightIcon }}
            page={<Typography variant={'typography/body/small/regular'}>{item.page}</Typography>}
          />
        );
      }}
    />
  );
}
