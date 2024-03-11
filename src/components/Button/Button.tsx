import MUIButton, { ButtonTypeMap } from '@mui/material/Button';
import React from 'react';
import { Typography } from '@components';
import { PaletteOptions } from '@mui/material';
import { CustomTypographyVariants } from '@shared/settings/theme';
import { colorPalette } from '@shared/settings/Color.ts';
import { CustomColorPaletteTypes } from '@shared/settings/color.type.ts';
import { CustomTypographyVariantsTypes } from '@components/Typography/Typography.types.ts';

export default function Button({
  children = 'button',
  variant,
  size,
  color = 'primary',
  disabled,
  sx,
}: {
  children?: React.ReactNode;
  variant: 'contained' | 'text' | 'outlined';
  size: 'L' | 'M' | 'S';
  color?: 'primary' | 'default' | 'gray';
  disabled?: boolean;
  sx?: any;
}) {
  function getTypoVariant(): CustomTypographyVariantsTypes {
    if (size === 'L') return 'typography/body/medium/bold';
    if (size === 'M') return 'typography/body/small/bold';
    if (size === 'S') return 'typography/label/large/bold';
  }

  function getTypoColor(): CustomColorPaletteTypes {
    if (variant === 'contained') {
      if (disabled) return 'color/gray/400';
      return 'color/white';
    }
    if (variant === 'outlined') {
      if (disabled) return 'color/gray/200';
      if (color === 'primary') return 'color/primary/600';
      if (color === 'default') return 'color/gray/800';
    }
  }

  return (
    <MUIButton variant={variant} size={size} disabled={disabled} color={color} sx={sx}>
      <Typography variant={getTypoVariant()} color={getTypoColor()}>
        {children}
      </Typography>
    </MUIButton>
  );
}
