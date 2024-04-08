import React from 'react';
import { DayLabelProps } from './DayLabel.types.ts';
import { Box } from '@mui/material';
import { dayIndicesOfWeek, daysOfWeek } from '../DatePicker/DatePicker.constants.ts';
import Typography from '../../Typography/Typography.tsx';

export default function DayLabel({ show }: DayLabelProps) {
  if (!show) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '28px',
        paddingRight: '28px',
      }}
    >
      {dayIndicesOfWeek.map((dayIndex) => (
        <Typography
          key={`day-label-${dayIndex}`}
          variant={'typography/label/large/regular'}
          color={'color/gray/500'}
          sx={{
            width: '36px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {daysOfWeek[dayIndex]}
        </Typography>
      ))}
    </Box>
  );
}
