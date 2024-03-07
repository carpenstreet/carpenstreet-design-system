import React from 'react';
import { TypographyTypeMap } from '@mui/material/Typography/Typography';
import { CustomTypographyVariants } from '@components/Typography/Typography.constants.ts';

export type TypographyProps =
  Pick<TypographyTypeMap['props'],
    'children'
  > & {
  variant: CustomTypographyVariantsTypes;
  color: string;
}

export type CustomTypographyVariantsTypes = keyof typeof CustomTypographyVariants;
