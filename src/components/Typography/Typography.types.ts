import { TypographyOwnProps } from '@mui/material/Typography/Typography';
import { CustomTypographyVariants } from '@components/Typography/Typography.constants';
import { CustomColorPaletteTypes } from '@shared/settings/color.type';

export type TypographyProps = {
  children: TypographyOwnProps['children'];
  variant: CustomTypographyVariantsTypes;
  color?: CustomColorPaletteTypes;
};

export type CustomTypographyVariantsTypes = keyof typeof CustomTypographyVariants;
