import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material';
import React from 'react';

export type DateRangePickerProps = {
  startDay: Dayjs | null;
  setStartDay: (newValue: Dayjs | null) => void;
  endDay: Dayjs | null;
  setEndDay: (newValue: Dayjs | null) => void;
  onClose?: () => void;
  locale: 'ko' | 'en';
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
