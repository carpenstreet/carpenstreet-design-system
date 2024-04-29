import React from 'react';
import { Typography as MUITypography } from '@mui/material';
import { TypographyProps } from './Typography.types.ts';

const Typography = React.forwardRef<HTMLSpanElement, TypographyProps>(({ color = 'color/gray/800', children, ...rest }, ref) => {
  return (
    <MUITypography color={color} {...rest} ref={ref}>
      {children}
    </MUITypography>
  );
});

export default Typography;
