import React from 'react';
import { SxProps, Theme } from '@mui/material';

export type DateRangeElementProps = {
  children: React.ReactNode;
  start?: boolean;
  between?: boolean;
  end?: boolean;
  today?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  sx?: SxProps<Theme>;
};
