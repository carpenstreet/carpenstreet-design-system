import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

export default function ManualIcon({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.65909 17.9658L6.90645 17.3928C5.05557 15.9836 3.90909 13.8533 3.90909 11.4974C3.90909 7.39806 7.43755 3.90909 12 3.90909C16.5624 3.90909 20.0909 7.39806 20.0909 11.4974C20.0909 15.5967 16.5624 19.0857 12 19.0857C11.2632 19.0857 10.5523 18.9937 9.87862 18.8225L9.24644 18.6618L7.65909 19.351V17.9658ZM5.75 21.4929C5.75 21.8566 6.11703 22.1017 6.44696 21.9585L9.40841 20.6727C10.235 20.8828 11.1037 20.9948 12 20.9948C17.5228 20.9948 22 16.7427 22 11.4974C22 6.25213 17.5228 2 12 2C6.47715 2 2 6.25213 2 11.4974C2 14.4966 3.46384 17.1712 5.75 18.9117V21.4929Z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15L13 10.5C13 9.94772 12.5523 9.5 12 9.5C11.4477 9.5 11 9.94772 11 10.5L11 15ZM12 6.5C11.4477 6.5 11 6.94771 11 7.5C11 8.05228 11.4477 8.5 12 8.5C12.5523 8.5 13 8.05228 13 7.5C13 6.94771 12.5523 6.5 12 6.5Z"
        fill={iconColor}
      />
    </svg>
  );
}
