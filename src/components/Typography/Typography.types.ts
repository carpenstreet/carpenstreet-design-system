import { TypographyTypeMap } from '@mui/material/Typography/Typography';
import { CustomTypographyVariants } from '@components/Typography/Typography.constants.ts';
import { PaletteOptions } from '@mui/material';

export type TypographyProps = Pick<TypographyTypeMap['props'], 'children' | 'variant'> & {
  color?: keyof PaletteOptions;
};

export type CustomTypographyVariantsTypes = keyof typeof CustomTypographyVariants;
