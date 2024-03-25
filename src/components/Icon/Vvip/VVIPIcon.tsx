import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

export default function VVIPIcon({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.63 12.37L12 8.5L8.37 12.37L4.5 8.5V16.5H11.5H12.5H19.5V8.5L15.63 12.37Z" fill={iconColor} stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
