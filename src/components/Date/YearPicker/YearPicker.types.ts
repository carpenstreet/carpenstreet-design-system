import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material';

export type YearPickerProps = {
  currentDay: Dayjs;
  makeOnSelectYear: (newMonthIndex: number) => () => void;
  sx?: SxProps<Theme>;
};
