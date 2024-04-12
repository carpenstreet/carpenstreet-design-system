import React from 'react';
import { SxProps, Theme } from '@mui/material';

export type WideElementProps = {
  children: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  sx?: SxProps<Theme>;
};
