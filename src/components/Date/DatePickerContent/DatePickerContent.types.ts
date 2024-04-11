import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material';

export type DatePickerContentProps = {
  value: Dayjs | null;
  today: Dayjs;
  currentDay: Dayjs;
  startDayIndex: number;
  numberOfWeeks: number;
  daysInMonth: number;
  makeOnSelectDate: (newDate: number) => () => void;
  sx?: SxProps<Theme>;
};
