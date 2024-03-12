import React from 'react';
import { IconCommonPropsType } from '@components/Icon/Icon.types';
import { useTheme } from '@mui/material/styles';

const DownloadIcon = ({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 19C4 18.4477 4.44772 18 5 18H19C19.5523 18 20 18.4477 20 19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19Z" fill={iconColor} />
      <path d="M5 20C4.44772 20 4 19.5523 4 19V17C4 16.4477 4.44772 16 5 16C5.55228 16 6 16.4477 6 17V19C6 19.5523 5.55228 20 5 20Z" fill={iconColor} />
      <path d="M19 20C18.4477 20 18 19.5523 18 19V17C18 16.4477 18.4477 16 19 16C19.5523 16 20 16.4477 20 17V19C20 19.5523 19.5523 20 19 20Z" fill={iconColor} />
      <path
        d="M12 15C11.7927 15.0016 11.59 14.9387 11.42 14.82L7.42 12C6.97119 11.6816 6.86393 11.0604 7.18 10.61C7.33307 10.3916 7.56708 10.2433 7.82998 10.1982C8.09289 10.1532 8.36291 10.215 8.58 10.37L12 12.76L15.4 10.2C15.8418 9.86863 16.4686 9.95817 16.8 10.4C17.1314 10.8418 17.0418 11.4686 16.6 11.8L12.6 14.8C12.4269 14.9298 12.2164 15 12 15Z"
        fill={iconColor}
      />
      <path d="M12 13C11.4477 13 11 12.5523 11 12V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V12C13 12.5523 12.5523 13 12 13Z" fill={iconColor} />
    </svg>
  );
};

export default DownloadIcon;
