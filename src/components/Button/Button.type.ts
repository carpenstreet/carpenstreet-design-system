import { TypographyProps as MUITypographyProps } from '@mui/material/Typography/Typography';
import { ButtonProps as MUIButtonProps } from '@mui/material';

export type ButtonProps = Omit<MUIButtonProps, 'children' | 'variant' | 'size' | 'color'> & {
  children: MUITypographyProps['children'];
  variant: 'contained' | 'outlined' | 'text' | 'underlined';
  size: 'XL' | 'L' | 'M' | 'S';
  color?: 'primary' | 'default' | 'gray';
  weight?: 'regular' | 'bold';
};
