import React from 'react';
import { CircularProgress as MUICircularProgress, CircularProgressProps as MUICircularProgressProps } from '@mui/material';

export default function Progress(props: MUICircularProgressProps) {
  const { thickness = 6, disableShrink = true, ...rest } = props;
  return <MUICircularProgress thickness={thickness} disableShrink={disableShrink} {...rest} />;
}
