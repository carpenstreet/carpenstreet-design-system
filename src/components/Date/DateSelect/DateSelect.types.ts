import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material';
import { Locale } from '../date.types.ts';

export type DateSelectProps = {
  focused?: boolean;
  error?: boolean;
  disabled?: boolean;
  locale: Locale;
  isRange?: boolean;
  value: Dayjs | { startDay?: Dayjs; endDay?: Dayjs };
  onClick?: () => void;
  sx?: SxProps<Theme>;
};
