import { SxProps, Theme } from '@mui/material';
import { Locale } from '../date.types.ts';

export type ControllerProps = {
  onResetDate: () => void;
  onClose: () => void;
  locale: Locale;
  sx?: SxProps<Theme>;
};
