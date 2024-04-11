import { Dayjs } from 'dayjs';

export type DatePickerProps = {
  value: Dayjs | null;
  setValue: (newValue: Dayjs | null) => void;
  onClose?: () => void;
};
