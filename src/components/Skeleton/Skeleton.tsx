import { Skeleton as MUISkeleton } from '@mui/material';
import { SkeletonPropsType } from './Skeleton.types.ts';

export default function Skeleton(props: SkeletonPropsType) {
  return <MUISkeleton {...props} />;
}
