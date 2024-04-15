import CalendarIcon from '../../Icon/Calendar/CalendarIcon.tsx';
import { useTheme } from '@mui/material/styles';
import { DateSelectProps } from './DateSelect.types.ts';
import { Box, Button as MUIButton } from '@mui/material';
import Typography from '../../Typography/Typography.tsx';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';

const DateSelect = React.forwardRef((props: DateSelectProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const { focused, error, disabled, locale, isRange = false, value, onClick, sx: sxOverride } = props;

  if (isRange && dayjs.isDayjs(value)) console.error('Design system DateSelect props error: range = true 일 땐, value의 타입이 { startDay: Dayjs; endDay: Dayjs } 이어야 합니다.');

  const theme = useTheme();

  const typoColor = focused || error ? 'color/gray/800' : 'color/gray/400';

  const format = locale === 'ko' ? 'YYYY-MM-DD' : 'MM-DD-YYYY';

  const valueToRender = (() => {
    if (isRange)
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Typography variant={'typography/body/medium/regular'}>{(value as { startDay: Dayjs; endDay: Dayjs })?.startDay?.format(format) ?? format}</Typography>
          <Box
            sx={{
              width: '8px',
              height: '1px',
              backgroundColor: theme.palette['color/gray/300'],
            }}
          />
          <Typography variant={'typography/body/medium/regular'}>{(value as { startDay: Dayjs; endDay: Dayjs })?.endDay?.format(format) ?? format}</Typography>
        </Box>
      );
    else return <Typography variant={'typography/body/medium/regular'}>{(value as Dayjs)?.format(format) ?? format}</Typography>;
  })();

  const sx = {
    padding: '16px 8px',
    height: '56px',
    '& .MuiTypography-root': {
      color: typoColor,
    },
    '& .MuiButton-endIcon': {
      marginLeft: '8px',
    },

    '&:hover': {
      borderColor: theme.palette['color/gray/600'],
      backgroundColor: 'unset',
    },

    ...(focused && {
      borderColor: theme.palette['color/primary/600'],
    }),

    ...(error && {
      borderColor: theme.palette['color/state/error'],
    }),
    ...sxOverride,
  };

  return (
    <MUIButton ref={ref} variant={'outlined'} color={'default'} size={'L'} endIcon={<CalendarIcon />} onClick={onClick} sx={sx} disabled={disabled}>
      {valueToRender}
    </MUIButton>
  );
});

export default DateSelect;
