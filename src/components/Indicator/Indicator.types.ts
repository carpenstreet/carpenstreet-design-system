import React from 'react';
import { BoxProps, SxProps, Theme } from '@mui/material';
import { DotPropsType } from './dot/Dot.types.ts';

export type IndicatorPropsType = {
  count: number;
  currentIndex?: number;
  onSelected?: (index: number) => void;
  sx?: SxProps<Theme>;
  dotProps?: DotPropsType;
  renderDot?: ({ index, isFocus }: DotPropsType & { index: number }) => React.ReactNode;
} & BoxProps;
