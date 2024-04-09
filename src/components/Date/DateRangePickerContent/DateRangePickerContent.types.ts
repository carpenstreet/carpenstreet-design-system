import { Dayjs } from 'dayjs';

export type DateRangePickerContentProps = {
  startDay: Dayjs | null;
  endDay: Dayjs | null;
  today: Dayjs;
  currentDay: Dayjs;
  startDayIndex: number;
  numberOfWeeks: number;
  daysInMonth: number;
  makeOnSelectDate: (newDate: number) => () => void;
};
