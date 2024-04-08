import React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '../../Typography/Typography.tsx';
import { DateElementProps } from './DateElement.types.ts';

export default function DateElement(props: DateElementProps) {
  const { children, wide, selected, today, event, disabled, onClick, sx: sxOverride } = props;

  const theme = useTheme();

  const typoVariant = selected ? 'typography/body/small/medium' : 'typography/body/small/regular';

  const sx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '36px',
    height: '36px',
    borderRadius: wide ? '1000px' : '50px',
    cursor: 'pointer',
    color: theme.palette['color/gray/800'],
    ...(wide && { width: '60px' }),
    ...(event && {
      backgroundColor: theme.palette['color/primary/dim/200'],
    }),
    ...(today && {
      boxShadow: `0px 0px 0px 1px ${theme.palette['color/gray/600']} inset`,
    }),
    '&:hover': {
      backgroundColor: event ? theme.palette['color/primary/dim/400'] : theme.palette['color/gray/100'],
    },
    ...(selected && {
      '&, &:hover': {
        backgroundColor: theme.palette['color/primary/600'],
        color: theme.palette['color/white'],
        boxShadow: 'unset',
      },
    }),
    ...(disabled && {
      backgroundColor: 'unset',
      color: theme.palette['color/gray/200'],
    }),
    ...sxOverride,
  };

  return (
    <Typography variant={typoVariant} sx={sx} onClick={onClick}>
      {children}
    </Typography>
  );
}
