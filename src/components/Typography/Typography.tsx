import React from 'react';
import { Typography as MUITypography } from '@mui/material';
import { TypographyProps } from './Typography.types.ts';

export default function Typography({ color = 'color/gray/800', children, ...rest }: TypographyProps) {
  return (
    <MUITypography color={color} {...rest}>
      {children}
    </MUITypography>
  );
}
