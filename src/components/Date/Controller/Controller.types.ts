import { SxProps, Theme } from '@mui/material';

export type ControllerProps = {
  onResetDate: () => void;
  onClose: () => void;
  locale: 'ko' | 'en';
  sx?: SxProps<Theme>;
};
