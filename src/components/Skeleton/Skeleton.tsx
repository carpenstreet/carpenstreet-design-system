import { Skeleton as MUISkeleton } from '@mui/material';
import { SkeletonPropsType } from './Skeleton.types.ts';

export default function Skeleton(props: SkeletonPropsType) {
  const { width, height, variant = 'text', ...otherProps } = props;
  const computedHeight = variant === 'circular' ? width : height;
  return <MUISkeleton width={width} height={computedHeight} variant={variant} {...otherProps} />;
}
