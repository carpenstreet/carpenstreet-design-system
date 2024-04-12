import {
  InputLabelProps as MUIInputLabelProps,
  FormHelperTextProps as MUIFormHelperTextProps,
  OutlinedTextFieldProps as MUIOutlinedTextFieldProps,
  StandardTextFieldProps as MUIStandardTextFieldProps,
} from '@mui/material';
import { BaseSelectProps as MUIBaseSelectProps, OutlinedSelectProps as MUIOutlinedSelectProps } from '@mui/material/Select/Select';

export type CustomTextFieldVariants = 'standard' | 'outlined';

type GetTextFieldProps<Variant extends CustomTextFieldVariants> = Variant extends 'standard' ? MUIStandardTextFieldProps : MUIOutlinedTextFieldProps;

type CustomMUISelectProps<Value = unknown> = MUIBaseSelectProps<Value> & MUIOutlinedSelectProps;

export type TextFieldProps<Variant extends CustomTextFieldVariants = CustomTextFieldVariants> = Omit<GetTextFieldProps<Variant>, 'color' | 'variant' | 'size' | 'SelectProps'> & {
  // override
  variant: Variant;
  size: 'M' | 'S';
  // custom
  success?: boolean;
  withHelperTextIcon?: boolean;
  SelectProps?: CustomMUISelectProps;
};

export type InputLabelProps = MUIInputLabelProps & { withStartIcon: boolean };

export type InputMore = { notched?: boolean; label?: any };

export type HelperTextProps = MUIFormHelperTextProps & {
  success?: boolean;
  withIcon?: boolean;
};
