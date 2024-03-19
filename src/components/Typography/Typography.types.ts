import { TypographyProps as MUITypographyProps } from '@mui/material/Typography/Typography';
import { CustomTypographyVariants } from '@components/Typography/Typography.constants';
import { CustomColorPaletteTypes } from '@shared/settings/color/color.type.ts';

export type TypographyProps = Omit<MUITypographyProps, 'children' | 'variant' | 'color'> & {
  children: MUITypographyProps['children'];
  variant: CustomTypographyVariantsTypes;
  color?: CustomColorPaletteTypes;
};

export type CustomTypographyVariantsTypes = keyof typeof CustomTypographyVariants;
