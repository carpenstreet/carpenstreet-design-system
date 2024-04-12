import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material';

export type MonthPickerProps = {
  currentDay: Dayjs;
  makeOnSelectMonth: (newMonthIndex: number) => () => void;
  locale: 'ko' | 'en';
  sx?: SxProps<Theme>;
};
