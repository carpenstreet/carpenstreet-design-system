import React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '../../Typography/Typography.tsx';
import { WideElementProps } from './WideElement.types.ts';

export default function WideElement(props: WideElementProps) {
  const { children, selected, disabled, onClick, sx: sxOverride } = props;

  const theme = useTheme();

  const typoVariant = selected ? 'typography/body/small/medium' : 'typography/body/small/regular';

  const sx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px',
    height: '32px',
    borderRadius: '1000px',
    cursor: 'pointer',
    color: theme.palette['color/gray/800'],
    '&:hover': {
      backgroundColor: theme.palette['color/gray/100'],
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
