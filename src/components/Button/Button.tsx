import MUIButton from '@mui/material/Button';
import React from 'react';
import { Typography } from '@components';
import { CustomTypographyVariantsTypes } from '@components/Typography/Typography.types.ts';

export default function Button({
  children = 'button',
  variant,
  size,
  color = 'primary',
  disabled,
  sx,
  weight = 'regular',
}: {
  children?: React.ReactNode;
  variant: 'contained' | 'outlined' | 'text' | 'underlined' | 'iconOnly';
  size: 'XL' | 'L' | 'M' | 'S';
  color?: 'primary' | 'default' | 'gray';
  disabled?: boolean;
  sx?: any;
  weight?: 'regular' | 'bold';
}) {
  function getTypoVariant(): CustomTypographyVariantsTypes {
    if (variant === 'contained' || variant === 'outlined') {
      if (size === 'L') return 'typography/body/medium/bold';
      if (size === 'M') return 'typography/body/small/bold';
      if (size === 'S') return 'typography/label/large/bold';
    }
    if (variant === 'text') {
      if (weight === 'regular') {
        if (size === 'XL') return 'typography/title/medium/regular';
        if (size === 'L') return 'typography/body/medium/regular';
        if (size === 'M') return 'typography/body/small/regular';
        if (size === 'S') return 'typography/label/large/regular';
      }
      if (weight === 'bold') {
        if (size === 'XL') return 'typography/title/medium/bold';
        if (size === 'L') return 'typography/body/medium/bold';
        if (size === 'M') return 'typography/body/small/bold';
        if (size === 'S') return 'typography/label/large/bold';
      }
    }
    if (variant === 'underlined') {
      if (size === 'XL') {
        console.error('underlined button does not support XL size');
        if (weight === 'regular') return 'typography/body/medium/regular';
        if (weight === 'bold') return 'typography/body/medium/bold';
      }
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
  }

  return (
    <MUIButton variant={variant} size={size} disabled={disabled} color={color} sx={sx}>
      <Typography variant={getTypoVariant()}>{children}</Typography>
    </MUIButton>
  );
}
