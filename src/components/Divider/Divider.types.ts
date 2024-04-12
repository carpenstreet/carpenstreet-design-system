import { DividerProps as MUIDividerProps } from '@mui/material';

export type DividerPropsType = Omit<MUIDividerProps, 'color' | 'orientation'> & {
  color: 100 | 200;
  orientation: 'horizontal' | 'vertical';
};
