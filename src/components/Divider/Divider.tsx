import React from 'react';
import { Divider as MUIDivider } from '@mui/material';
import { DividerPropsType } from './Divider.types.ts';

export default function Divider(props: DividerPropsType) {
  return <MUIDivider {...props} />;
}
