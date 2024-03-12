import { TypographyOwnProps } from '@mui/material/Typography/Typography';
import { ButtonOwnProps } from '@mui/material';

export type ButtonProps = {
  children: TypographyOwnProps['children'];
  variant: 'contained' | 'outlined' | 'text' | 'underlined';
  size: 'XL' | 'L' | 'M' | 'S';
  color?: 'primary' | 'default' | 'gray';
  disabled?: ButtonOwnProps['disabled'];
  sx?: ButtonOwnProps['sx'];
  weight?: 'regular' | 'bold';
  startIcon?: ButtonOwnProps['startIcon'];
  endIcon?: ButtonOwnProps['endIcon'];
};
