import React from 'react';
import { Typography as MUITypography } from '@mui/material';
import { TypographyProps } from './Typography.types.ts';

const Typography = ({ variant, color = 'color/gray/800', children }: TypographyProps) => {
  return (
    <MUITypography variant={variant} color={color}>
      {children}
    </MUITypography>
  );
};

export default Typography;
