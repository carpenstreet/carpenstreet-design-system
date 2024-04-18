import { SnackbarProps as MUISnackbarProps } from '@mui/material/Snackbar/Snackbar';

export type SnackbarProps = MUISnackbarProps & {
  variant?: 'default' | 'white' | 'info' | 'success' | 'warning' | 'error';
  showCloseIcon?: boolean;
  align?: 'horizontal' | 'vertical';
  iconToTop?: boolean;
  onCloseIconClick?: () => void;
};
