import { DividerProps as MUIDividerProps } from '@mui/material';

export type DividerPropsType = Omit<MUIDividerProps, 'light' | 'orientation'> & {
  light?: boolean;
  orientation?: 'horizontal' | 'vertical';
};
