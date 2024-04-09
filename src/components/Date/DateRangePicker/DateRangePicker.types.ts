import { Dayjs } from 'dayjs';

export type DateRangePickerProps = {
  startDay: Dayjs | null;
  setStartDay: (newValue: Dayjs | null) => void;
  endDay: Dayjs | null;
  setEndDay: (newValue: Dayjs | null) => void;
};
