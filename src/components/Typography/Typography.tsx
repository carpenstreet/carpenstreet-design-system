import React from 'react';
import { Typography as MUITypography } from '@mui/material';
import { TypographyProps } from '@components/Typography/Typography.types.ts';

const Typography = ({ variant, color = 'color/gray/800', children }: TypographyProps) => {
  return (
    <MUITypography variant={variant} color={color} sx={{ fontFamily: '"Pretendard Variable", Pretendard' }}>
      {children}
    </MUITypography>
  );
};

export default Typography;
