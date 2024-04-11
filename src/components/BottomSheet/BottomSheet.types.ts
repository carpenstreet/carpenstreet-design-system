import { DialogProps as MUIModalProps } from '@mui/material/Dialog/Dialog';
import React from 'react';

export type BottomSheetProps = Omit<MUIModalProps, 'children'> & {
  height: 'full' | 'hug';
  showCloseIcon?: boolean;
  renderTitle?: React.ReactNode;
  renderContent?: React.ReactNode;
  renderActions?: React.ReactNode;
};
