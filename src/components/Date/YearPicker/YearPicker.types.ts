import { Dayjs } from 'dayjs';

export type YearPickerProps = {
  currentDay: Dayjs;
  makeOnSelectYear: (newMonthIndex: number) => () => void;
};
