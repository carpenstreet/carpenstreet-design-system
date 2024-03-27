import { InputProps as MUIInputProps, InputLabelProps as MUIInputLabelProps, FormHelperTextProps as MUIFormHelperTextProps } from '@mui/material';
import { OutlinedTextFieldProps, StandardTextFieldProps } from '@mui/material/TextField/TextField';

export type CustomTextFieldVariants = 'standard' | 'outlined';

type GetTextFieldProps<Variant extends CustomTextFieldVariants> = Variant extends 'standard' ? StandardTextFieldProps : OutlinedTextFieldProps;

export type TextFieldProps<Variant extends CustomTextFieldVariants = CustomTextFieldVariants> = Omit<
  GetTextFieldProps<Variant>,
  'color' | 'select' | 'SelectProps' | 'variant' | 'size'
> & {
  // override
  variant: Variant;
  size: 'M' | 'S';
  // custom
  success?: boolean;
  withHelperTextIcon?: boolean;
};

export type InputLabelProps = MUIInputLabelProps & { withStartIcon: boolean };

export type InputMore = { notched?: boolean; label?: any };

export type HelperTextProps = MUIFormHelperTextProps & {
  success?: boolean;
  withIcon?: boolean;
};
