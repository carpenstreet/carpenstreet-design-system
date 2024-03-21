import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

const CaretUpIcon = ({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.2899 12.29L12.6999 9.7C12.3099 9.31 11.6799 9.31 11.2899 9.7L8.69995 12.29C8.06995 12.92 8.51995 14 9.40995 14L14.5899 14C15.4799 14 15.9199 12.92 15.2899 12.29Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default CaretUpIcon;
