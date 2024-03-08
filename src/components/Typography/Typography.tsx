import React from 'react';
import { Typography as MUITypography } from '@mui/material';
import { TypographyProps } from '@components/Typography/Typography.types.ts';

const Typography = ({ variant, color, children }: TypographyProps) => {
  return (
    <MUITypography variant={variant} color={color}>
      {children}
    </MUITypography>
  );
};

export default Typography;
