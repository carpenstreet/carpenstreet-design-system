import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material';
import { Locale } from '../date.types.ts';

export type MonthPickerProps = {
  currentDay: Dayjs;
  makeOnSelectMonth: (newMonthIndex: number) => () => void;
  locale: Locale;
  sx?: SxProps<Theme>;
};
