import { IconButtonProps as MUIIconButtonProps } from '@mui/material';

export type IconButtonProps = Omit<MUIIconButtonProps, 'color' | 'size'> & {
  color?: 'primary' | 'default';
  size: 'M' | 'S';
};
