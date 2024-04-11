import { Dayjs } from 'dayjs';

export type MonthPickerProps = {
  currentDay: Dayjs;
  makeOnSelectMonth: (newMonthIndex: number) => () => void;
  locale: 'ko' | 'en';
};
