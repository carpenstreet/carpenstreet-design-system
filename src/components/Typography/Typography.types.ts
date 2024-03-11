import { TypographyTypeMap } from '@mui/material/Typography/Typography';
import { CustomTypographyVariants } from '@components/Typography/Typography.constants';
import { CustomColorPaletteTypes } from '@shared/settings/color.type';

export type TypographyProps = Pick<TypographyTypeMap['props'], 'children'> & {
  variant: CustomTypographyVariantsTypes;
  color?: CustomColorPaletteTypes;
};

export type CustomTypographyVariantsTypes = keyof typeof CustomTypographyVariants;
