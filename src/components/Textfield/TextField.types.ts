import {
  InputProps as MUIInputProps,
  TextFieldProps as MUITextFieldProps,
  InputLabelProps as MUIInputLabelProps,
  FormHelperTextProps as MUIFormHelperTextProps,
} from '@mui/material';

export type TextFieldProps = Omit<MUITextFieldProps, 'color' | 'select' | 'SelectProps' | 'variant' | 'size'> & {
  // override
  variant: 'outlined' | 'standard';
  size: 'M' | 'S';
  // custom
  startIcon?: MUIInputProps['startAdornment'];
  endIcon?: MUIInputProps['endAdornment'];
  success?: boolean;
  withHelperTextIcon?: boolean;
};

export type InputLabelProps = MUIInputLabelProps & { withStartIcon: boolean };

export type InputMore = { notched?: boolean; label?: any };

export type HelperTextProps = MUIFormHelperTextProps & {
  success?: boolean;
  withIcon?: boolean;
};
