import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material';

export type DateSelectProps = {
  focused?: boolean;
  error?: boolean;
  disabled?: boolean;
  locale: 'ko' | 'en';
  isRange?: boolean;
  value: Dayjs | { startDay?: Dayjs; endDay?: Dayjs };
  onClick?: () => void;
  sx?: SxProps<Theme>;
};
