import React from 'react';
import { Box } from '@mui/material';
import DateElement from '../DateElement/DateElement.tsx';
import dayjs from 'dayjs';
import { YearPickerProps } from './YearPicker.types.ts';

export default function YearPicker(props: YearPickerProps) {
  const { currentDay, makeOnSelectYear } = props;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      {[...Array(67).keys()].map((row) => {
        return (
          <Box
            key={`year-${row}`}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px 12px',
              width: '100%',
            }}
          >
            {[...Array(3).keys()].map((col) => {
              const year = 1900 + row * 3 + col;
              const isSelected = year === currentDay.year();
              const handleSelectYear = makeOnSelectYear(year);
              return (
                <DateElement key={year} wide selected={isSelected} onClick={handleSelectYear}>
                  {dayjs().year(year).format('YYYY')}
                </DateElement>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}
