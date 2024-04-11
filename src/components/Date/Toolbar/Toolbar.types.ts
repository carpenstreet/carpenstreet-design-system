import { Dayjs } from 'dayjs';

export type ToolbarProps = {
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  showYearPicker: boolean;
  onShowYearPicker: () => void;
  showMonthPicker: boolean;
  onShowMonthPicker: () => void;
  currentDay: Dayjs;
  locale: 'ko' | 'en';
};
