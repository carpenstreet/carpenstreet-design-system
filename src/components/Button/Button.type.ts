import { TypographyOwnProps } from '@mui/material/Typography/Typography';
import { ButtonProps as MUIButtonProps } from '@mui/material';

export type ButtonProps = Omit<MUIButtonProps, 'children' | 'variant' | 'size' | 'color'> & {
  children: TypographyOwnProps['children'];
  variant: 'contained' | 'outlined' | 'text' | 'underlined';
  size: 'XL' | 'L' | 'M' | 'S';
  color?: 'primary' | 'default' | 'gray';
  weight?: 'regular' | 'bold';
};
