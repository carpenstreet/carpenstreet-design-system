import React from 'react';
import { MenuProps as MUIMenuProps } from '@mui/material/Menu/Menu';

export type MenuPropsType = MUIMenuProps & {
  width?: number;
  fullWidth?: boolean;
  paperSx?: React.CSSProperties;
};
