import {
  InputLabelProps as MUIInputLabelProps,
  FormHelperTextProps as MUIFormHelperTextProps,
  OutlinedTextFieldProps as MUIOutlinedTextFieldProps,
  StandardTextFieldProps as MUIStandardTextFieldProps,
} from '@mui/material';
import { SelectProps } from '../Select/Select.types.ts';

export type CustomTextFieldVariants = 'standard' | 'outlined';

type GetTextFieldProps<Variant extends CustomTextFieldVariants> = Variant extends 'standard' ? MUIStandardTextFieldProps : MUIOutlinedTextFieldProps;

export type TextFieldProps<Variant extends CustomTextFieldVariants = CustomTextFieldVariants> = Omit<GetTextFieldProps<Variant>, 'color' | 'variant' | 'size' | 'SelectProps'> & {
  // override
  variant: Variant;
  size: 'M' | 'S';
  // custom
  success?: boolean;
  withHelperTextIcon?: boolean;
  SelectProps?: SelectProps;
};

export type InputLabelProps = MUIInputLabelProps & { withStartIcon: boolean };

export type InputMore = { notched?: boolean; label?: any };

export type HelperTextProps = MUIFormHelperTextProps & {
  success?: boolean;
  withIcon?: boolean;
};
