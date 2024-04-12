import MUIButton from '@mui/material/Button';
import React from 'react';
import Typography from '../Typography/Typography';
import { CustomTypographyVariantsTypes } from '../Typography/Typography.types.ts';
import { ButtonProps } from './Button.types.ts';

export default function Button(props: ButtonProps) {
  const { children, color = 'default', ...rest } = props;
  const { variant, size, weight } = rest;

  const typoVariant = ((): CustomTypographyVariantsTypes => {
    if (variant === 'contained') {
      if (size === 'L') return 'typography/body/medium/bold';
      if (size === 'M') return 'typography/body/small/bold';
      if (size === 'S') return 'typography/label/large/bold';
    }
    if (variant === 'outlined') {
      if (size === 'L') return 'typography/body/medium/bold';
      if (size === 'M') return 'typography/body/small/bold';
      if (size === 'S') return 'typography/label/large/bold';
    }
    if (variant === 'text') {
      if (weight === 'regular') {
        if (size === 'L') return 'typography/body/medium/regular';
        if (size === 'M') return 'typography/body/small/regular';
        if (size === 'S') return 'typography/label/large/regular';
      }
      if (weight === 'bold') {
        if (size === 'L') return 'typography/body/medium/bold';
        if (size === 'M') return 'typography/body/small/bold';
        if (size === 'S') return 'typography/label/large/bold';
      }
    }
    if (variant === 'underlined') {
      if (weight === 'regular') {
        if (size === 'L') return 'typography/body/medium/regular';
        if (size === 'M') return 'typography/body/small/regular';
        if (size === 'S') return 'typography/label/large/regular';
      }
      if (weight === 'bold') {
        if (size === 'L') return 'typography/body/medium/bold';
        if (size === 'M') return 'typography/body/small/bold';
        if (size === 'S') return 'typography/label/large/bold';
      }
    }
  })();

  React.useEffect(() => {
    if (variant === 'contained') {
      if (color === 'gray') console.error('Design system Button props error: color - contained variant는 gray를 지원하지 않습니다 (fallback 처리로 default가 적용되었습니다)');
      if (weight === 'bold') console.error('Design system Button props error: weight - contained variant는  bold를 지원하지 않습니다 (regular와 동일하게 처리됩니다)');
    }
    if (variant === 'outlined') {
      if (color === 'gray') console.error('Design system Button props error: color - outlined variant는 gray를 지원하지 않습니다 (fallback 처리로 default가 적용되었습니다)');
      if (weight === 'bold') console.error('Design system Button props error: weight - outlined variant는  bold를 지원하지 않습니다 (regular와 동일하게 처리됩니다)');
    }
  }, [variant, size, color, weight]);

  return (
    <MUIButton color={color} {...rest}>
      <Typography variant={typoVariant}>{children}</Typography>
    </MUIButton>
  );
}
