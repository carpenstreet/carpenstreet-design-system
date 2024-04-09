import { DialogProps as MUIModalProps } from '@mui/material/Dialog/Dialog';
import React from 'react';

export type BottomSheetProps = Omit<MUIModalProps, 'children'> & {
  height: 'full' | 'hug';
  showCloseIcon?: boolean;
  renderTitle?: string | React.ReactNode;
  renderContent?: string | React.ReactNode;
  renderActions?: string | React.ReactNode;
};
