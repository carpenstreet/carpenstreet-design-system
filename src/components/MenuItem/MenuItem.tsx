import React from 'react';
import MUIMenuItem from '@mui/material/MenuItem';
import { MenuItemProps } from './MenuItem.types.ts';
import Typography from '../Typography/Typography.tsx';
import { CustomTypographyVariantsTypes } from '../Typography/Typography.types.ts';
import { CustomColorPaletteTypes } from '../../shared/settings/color/color.type.ts';

export default function MenuItem({ children, selected, disabled, ...rest }: MenuItemProps) {
  const typographyVariant: CustomTypographyVariantsTypes = (() => {
    if (selected) return 'typography/body/small/medium';
    return 'typography/body/small/regular';
  })();

  const typographyColor: CustomColorPaletteTypes = (() => {
    if (disabled) return 'color/gray/200';
    return 'color/gray/800';
  })();

  return (
    <MUIMenuItem selected={selected} disabled={disabled} {...rest}>
      <Typography variant={typographyVariant} color={typographyColor}>
        {children}
      </Typography>
    </MUIMenuItem>
  );
}
