import { SxProps, Theme } from '@mui/material';
import React from 'react';

export type InformationProps = {
  variant: 'default' | 'info' | 'attention';
  sx?: SxProps<Theme>;
  iconBoxSx?: SxProps<Theme>;
  contents: React.ReactNode;
  icon?: React.ReactNode;
  iconToTop?: boolean;
};
