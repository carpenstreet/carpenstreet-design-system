import React from 'react';
import { SxProps, Theme } from '@mui/material';

export type LabelProps = {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'info' | 'success' | 'error';
  variant: 'filled' | 'soft' | 'outlined' | 'small';
  sx?: SxProps<Theme>;
};
