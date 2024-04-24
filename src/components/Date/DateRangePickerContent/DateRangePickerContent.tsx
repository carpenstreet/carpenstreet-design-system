import React from 'react';
import { Box } from '@mui/material';
import DateRangeElement from '../DateRangeElement/DateRangeElement.tsx';
import { DateRangePickerContentProps } from './DateRangePickerContent.types.ts';
import dayjs from 'dayjs';

export default function DateRangePickerContent(props: DateRangePickerContentProps) {
  const { startDay, endDay, today, currentDay, numberOfWeeks, daysInMonth, startDayIndex, makeOnSelectDate, sx: sxOverride } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        paddingBottom: '12px',
        ...sxOverride,
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
                  const isStart = startDay?.isSame(currentDay.date(date), 'day');
                  const isEnd = endDay?.isSame(currentDay.date(date), 'day');
                  const isBetween = startDay && endDay && currentDay.date(date).isBetween(startDay, endDay, 'day');
                  const handleSelectDate = makeOnSelectDate(date);
                  return (
                    <DateRangeElement key={`week-${index}-date-${date}`} today={isToday} start={isStart} end={isEnd} between={isBetween} onClick={handleSelectDate}>
                      {date}
                    </DateRangeElement>
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
                  const isStart = startDay?.isSame(currentDay.date(date), 'day');
                  const isEnd = endDay?.isSame(currentDay.date(date), 'day');
                  const isBetween = startDay && endDay && currentDay.date(date).isBetween(startDay, endDay, 'day');
                  const handleSelectDate = makeOnSelectDate(date);
                  return (
                    <DateRangeElement key={`week-${index}-date-${date}`} today={isToday} start={isStart} end={isEnd} between={isBetween} onClick={handleSelectDate}>
                      {date}
                    </DateRangeElement>
                  );
                })}
          </Box>
        );
      })}
    </Box>
  );
}
