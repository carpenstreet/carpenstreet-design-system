import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material';
import { Locale } from '../date.types.ts';
import { DatePickerProps } from '../DatePicker/DatePicker.types.ts';

export type ToolbarProps = {
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onPreviousYear?: () => void;
  onNextYear?: () => void;
  showYearPicker: boolean;
  onShowYearPicker: () => void;
  showMonthPicker: boolean;
  onShowMonthPicker: () => void;
  currentDay: Dayjs;
  locale: Locale;
  sx?: SxProps<Theme>;
  unit?: DatePickerProps['unit'];
};
