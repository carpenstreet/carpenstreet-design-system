import React from 'react';
import { DateRangeElementProps } from './DateRangeElement.types.ts';
import { useTheme } from '@mui/material/styles';
import Typography from '../../Typography/Typography.tsx';
import { SxProps, Theme } from '@mui/material';

export default function DateRangeElement(props: DateRangeElementProps) {
  const { children, start, between, end, today, disabled, onClick, sx: sxOverride } = props;

  const theme = useTheme();

  const sx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50px',
    cursor: 'pointer',
    color: theme.palette['color/gray/800'],
    ...(today && {
      boxShadow: `0px 0px 0px 1px ${theme.palette['color/gray/600']} inset`,
    }),
    ...(!(start || end) && {
      '&:hover': {
        backgroundColor: theme.palette['color/gray/100'],
      },
    }),
    ...((start || end) && {
      backgroundColor: theme.palette['color/primary/600'],
      color: theme.palette['color/white'],
      boxShadow: 'unset',
    }),
    ...(between && {
      backgroundColor: theme.palette['color/primary/100'],
    }),
    ...(disabled && {
      backgroundColor: 'unset',
      color: theme.palette['color/gray/200'],
    }),
    ...sxOverride,
  } satisfies SxProps<Theme>;

  return (
    <Typography variant={'typography/body/small/regular'} sx={sx} onClick={onClick}>
      {children}
    </Typography>
  );
}
