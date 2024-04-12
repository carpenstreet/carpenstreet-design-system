import React from 'react';
import { Divider as MUIDivider } from '@mui/material';
import { DividerPropsType } from './Divider.types.ts';

export default function Divider({ color, sx, ...rest }: DividerPropsType) {
  const dividerSx = {
    borderColor: `color/gray/dim/${color}`,
    ...sx,
  };

  return <MUIDivider sx={dividerSx} {...rest} />;
}
