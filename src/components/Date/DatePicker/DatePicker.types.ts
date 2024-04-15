import React from 'react';
import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/material';

export type DatePickerProps = {
  value: Dayjs | null;
  setValue: (newValue: Dayjs | null) => void;
  onClose?: () => void;
  locale: 'ko' | 'en';
  sx?: SxProps<Theme>;
  toolbarSx?: SxProps<Theme>;
  dayLabelSx?: SxProps<Theme>;
  monthPickerSx?: SxProps<Theme>;
  yearPickerSx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
  anchorRef?: React.MutableRefObject<any>;
};
