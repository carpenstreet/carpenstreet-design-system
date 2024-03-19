import { CheckboxProps as MUICheckboxProps } from '@mui/material';

export type CheckboxProps = Omit<MUICheckboxProps, 'color' | 'size'> & {
  color?: 'default' | 'primary';
  size: 'M' | 'S';
};
