import React from 'react';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { YearPickerProps } from './YearPicker.types.ts';
import WideElement from '../WideElement/WideElement.tsx';

export default function YearPicker(props: YearPickerProps) {
  const { currentDay, makeOnSelectYear, sx: sxOverride } = props;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', ...sxOverride }}>
      {[...Array(67).keys()].map((row) => {
        return (
          <Box
            key={`year-${row}`}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px',
              width: '100%',
            }}
          >
            {[...Array(3).keys()].map((col) => {
              const year = 1900 + row * 3 + col;
              const isSelected = currentDay && year === currentDay.year();
              const handleSelectYear = makeOnSelectYear(year);
              return (
                <WideElement key={year} selected={isSelected} onClick={handleSelectYear}>
                  {dayjs().year(year).format('YYYY')}
                </WideElement>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}
