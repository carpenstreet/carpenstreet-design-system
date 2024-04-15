import React from 'react';
import { Divider as MUIDivider } from '@mui/material';
import { DividerPropsType } from './Divider.types.ts';

export default function Divider({ light = false, orientation = 'horizontal', ...props }: DividerPropsType) {
  return <MUIDivider light={light} orientation={orientation} {...props} />;
}
