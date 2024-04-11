import React from 'react';
import { DialogProps as MUIModalProps } from '@mui/material/Dialog';

export type ModalProps = Omit<MUIModalProps, 'children'> & {
  size: 'M' | 'S';
  renderTitle?: React.ReactNode;
  renderContent?: React.ReactNode;
  renderActions?: React.ReactNode;
};
