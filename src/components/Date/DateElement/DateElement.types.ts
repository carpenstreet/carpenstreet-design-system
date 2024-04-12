import React from 'react';
import { SxProps, Theme } from '@mui/material';

export type DateElementProps = {
  children: React.ReactNode;
  wide?: boolean;
  selected?: boolean;
  today?: boolean;
  event?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  sx?: SxProps<Theme>;
};
