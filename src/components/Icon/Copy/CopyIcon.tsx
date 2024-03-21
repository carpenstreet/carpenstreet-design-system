import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

export default function CopyIcon({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.31982 4.35999V15.8H8.15982V17.8H5.27982C4.19954 17.8 3.31982 16.9203 3.31982 15.84V4.31999C3.31982 3.2397 4.19954 2.35999 5.27982 2.35999H14.8798C15.9601 2.35999 16.8398 3.2397 16.8398 4.31999V7.19999H14.8398V4.35999H5.31982Z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.15982 8.19999V19.64H18.6798V8.19999H9.15982ZM7.15982 8.15999C7.15982 7.0797 8.03954 6.19999 9.11982 6.19999H18.7198C19.8001 6.19999 20.6798 7.0797 20.6798 8.15999V19.68C20.6798 20.7603 19.8001 21.64 18.7198 21.64H9.11982C8.03954 21.64 7.15982 20.7603 7.15982 19.68V8.15999Z"
        fill={iconColor}
      />
    </svg>
  );
}
