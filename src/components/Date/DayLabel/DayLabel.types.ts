import { SxProps, Theme } from '@mui/material';
import { Locale } from '../date.types.ts';

export type DayLabelProps = {
  locale: Locale;
  sx?: SxProps<Theme>;
};
