import React from 'react';
import { Box } from '@mui/material';
import DateElement from '../DateElement/DateElement.tsx';
import { DatePickerContentProps } from './DatePickerContent.types.ts';

export default function DatePickerContent(props: DatePickerContentProps) {
  const { value, today, currentDay, numberOfWeeks, daysInMonth, startDayIndex, makeOnSelectDate } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      {[...Array(numberOfWeeks).keys()].map((row, index) => {
        return (
          <Box
            key={`week-${index}`}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {index === 0
              ? [...Array(7).keys()].map((col) => {
                  if (col < startDayIndex)
                    return (
                      <Box
                        key={`week-${index}-blank-${row * 7 + col}`}
                        sx={{
                          width: '36px',
                          height: '36px',
                        }}
                      />
                    );
                  const date = col - startDayIndex + 1;
                  const isToday = today.isSame(currentDay.date(date), 'day');
                  const isSelected = value?.isSame(currentDay.date(date), 'day');
                  const handleSelectDate = makeOnSelectDate(date);
                  return (
                    <DateElement key={`week-${index}-date-${date}`} today={isToday} selected={isSelected} onClick={handleSelectDate}>
                      {String(date).padStart(2, '0')}
                    </DateElement>
                  );
                })
              : [...Array(7).keys()].map((col) => {
                  const date = row * 7 + col - startDayIndex + 1;
                  if (date > daysInMonth)
                    return (
                      <Box
                        key={`week-${index}-blank-${row * 7 + col}`}
                        sx={{
                          width: '36px',
                          height: '36px',
                        }}
                      />
                    );
                  const isToday = today.isSame(currentDay.date(date), 'day');
                  const isSelected = value?.isSame(currentDay.date(date), 'day');
                  const handleSelectDate = makeOnSelectDate(date);
                  return (
                    <DateElement key={`week-${index}-date-${date}`} today={isToday} selected={isSelected} onClick={handleSelectDate}>
                      {String(date).padStart(2, '0')}
                    </DateElement>
                  );
                })}
          </Box>
        );
      })}
    </Box>
  );
}
