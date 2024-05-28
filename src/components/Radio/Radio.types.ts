import { RadioProps as MUIRadioProps } from '@mui/material';

export type RadioProps = Omit<MUIRadioProps, 'color' | 'size'> & {
  color?: 'default' | 'primary';
  size: 'M' | 'S';
};
