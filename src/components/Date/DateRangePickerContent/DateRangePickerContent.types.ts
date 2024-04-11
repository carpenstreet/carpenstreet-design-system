import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material';

export type DateRangePickerContentProps = {
  startDay: Dayjs | null;
  endDay: Dayjs | null;
  today: Dayjs;
  currentDay: Dayjs;
  startDayIndex: number;
  numberOfWeeks: number;
  daysInMonth: number;
  makeOnSelectDate: (newDate: number) => () => void;
  sx?: SxProps<Theme>;
};
