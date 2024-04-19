import React from 'react';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { MonthPickerProps } from './MonthPicker.types.ts';
import WideElement from '../WideElement/WideElement.tsx';

export default function MonthPicker({ currentDay, makeOnSelectMonth, locale, sx: sxOverride }: MonthPickerProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        paddingBottom: '18px',
        ...sxOverride,
      }}
    >
      {[...Array(4).keys()].map((row) => {
        return (
          <Box
            key={`month-${row}`}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px 12px',
              width: '100%',
            }}
          >
            {[...Array(3).keys()].map((col) => {
              const monthIndex = row * 3 + col;
              const isSelected = monthIndex === currentDay.month();
              const handleSelectMonth = makeOnSelectMonth(monthIndex);
              return (
                <WideElement key={monthIndex} selected={isSelected} onClick={handleSelectMonth}>
                  {dayjs()
                    .month(monthIndex)
                    .format(locale === 'ko' ? 'MM' : 'MMM')}
                </WideElement>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}
