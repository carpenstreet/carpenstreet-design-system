import React from 'react';
import { IconCommonPropsType } from '@components/Icon/Icon.types';
import { useTheme } from '@mui/material/styles';

const FilterIcon = ({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H4C3.44772 10 3 9.55228 3 9Z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 15C3 14.4477 3.44772 14 4 14H20C20.5523 14 21 14.4477 21 15C21 15.5523 20.5523 16 20 16H4C3.44772 16 3 15.5523 3 15Z"
        fill={iconColor}
      />
      <path d="M10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9Z" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10C8.55228 10 9 9.55228 9 9C9 8.44772 8.55228 8 8 8ZM5 9C5 7.34315 6.34315 6 8 6C9.65685 6 11 7.34315 11 9C11 10.6569 9.65685 12 8 12C6.34315 12 5 10.6569 5 9Z"
        fill={iconColor}
      />
      <path d="M18 15C18 16.1046 17.1046 17 16 17C14.8954 17 14 16.1046 14 15C14 13.8954 14.8954 13 16 13C17.1046 13 18 13.8954 18 15Z" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 14C15.4477 14 15 14.4477 15 15C15 15.5523 15.4477 16 16 16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14ZM13 15C13 13.3431 14.3431 12 16 12C17.6569 12 19 13.3431 19 15C19 16.6569 17.6569 18 16 18C14.3431 18 13 16.6569 13 15Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default FilterIcon;
