import { SkeletonProps as MUISkeletonProps } from '@mui/material';

export type SkeletonPropsType = Omit<MUISkeletonProps, 'width' | 'height' | 'variant'> & {
  width?: number | string;
  height?: number | string;
  variant?: 'text' | 'rectangular' | 'circular' | 'rounded';
};
