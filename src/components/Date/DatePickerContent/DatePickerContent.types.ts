import { Dayjs } from 'dayjs';

export type DatePickerContentProps = {
  value: Dayjs | null;
  today: Dayjs;
  currentDay: Dayjs;
  startDayIndex: number;
  numberOfWeeks: number;
  daysInMonth: number;
  makeOnSelectDate: (newDate: number) => () => void;
};
