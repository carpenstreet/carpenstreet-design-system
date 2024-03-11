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
  color?: ButtonTypeMap['props']['color'];
  disabled?: boolean;
  sx?: any;
}) {
  function getTypoVariant(): CustomTypographyVariantsTypes {
    if (size === 'L') return 'typography/body/medium/bold';
    if (size === 'M') return 'typography/body/small/bold';
    if (size === 'S') return 'typography/label/large/bold';
  }

  function getTypoColor(): CustomColorPaletteTypes {
    if (disabled) return 'color/gray/400';
    return 'color/white';
  }

  return (
    <MUIButton variant={variant} size={size} disabled={disabled} color={color} sx={sx}>
      <Typography variant={getTypoVariant()} color={getTypoColor()}>
        {children}
      </Typography>
    </MUIButton>
  );
}
