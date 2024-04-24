import React from 'react';
import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material';
import { Locale } from '../date.types.ts';

export type DatePickerProps = {
  value: Dayjs | null;
  onSelectValue: (newValue: Dayjs | null) => void;
  onClose?: () => void;
  locale: Locale;
  showController?: boolean;
  sx?: SxProps<Theme>;
  toolbarSx?: SxProps<Theme>;
  dayLabelSx?: SxProps<Theme>;
  monthPickerSx?: SxProps<Theme>;
  yearPickerSx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
  controllerSx?: SxProps<Theme>;
  anchorRef?: React.MutableRefObject<any>;
};
