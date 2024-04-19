import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material';
import { Locale } from '../date.types.ts';

export type ToolbarProps = {
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  showYearPicker: boolean;
  onShowYearPicker: () => void;
  showMonthPicker: boolean;
  onShowMonthPicker: () => void;
  currentDay: Dayjs;
  locale: Locale;
  sx?: SxProps<Theme>;
};
