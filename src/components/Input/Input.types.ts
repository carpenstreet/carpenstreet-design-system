import { TextFieldProps } from '@mui/material';

export type InputPropsType = Omit<TextFieldProps, 'variant' | 'size'> & {
  variant: 'outlined' | 'standard';
  size: 'S' | 'M';
};
