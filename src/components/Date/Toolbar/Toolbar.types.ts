import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material';

export type ToolbarProps = {
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  showYearPicker: boolean;
  onShowYearPicker: () => void;
  showMonthPicker: boolean;
  onShowMonthPicker: () => void;
  currentDay: Dayjs;
  locale: 'ko' | 'en';
  sx?: SxProps<Theme>;
};
