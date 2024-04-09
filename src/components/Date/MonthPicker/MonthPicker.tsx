import React from 'react';
import { Box } from '@mui/material';
import DateElement from '../DateElement/DateElement.tsx';
import dayjs from 'dayjs';
import { MonthPickerProps } from './MonthPicker.types.ts';

export default function MonthPicker({ currentDay, makeOnSelectMonth }: MonthPickerProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      {[...Array(4).keys()].map((row) => {
        return (
          <Box
            key={`month-${row}`}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px 12px',
              width: '100%',
            }}
          >
            {[...Array(3).keys()].map((col) => {
              const monthIndex = row * 3 + col;
              const isSelected = monthIndex === currentDay.month();
              const handleSelectMonth = makeOnSelectMonth(monthIndex);
              return (
                <DateElement key={monthIndex} wide selected={isSelected} onClick={handleSelectMonth}>
                  {dayjs().month(monthIndex).format('MM')}
                </DateElement>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}
