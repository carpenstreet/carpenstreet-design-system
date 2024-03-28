import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

export default function VVIPIcon({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.30866 8.03807C4.4955 7.96068 4.71055 8.00346 4.85355 8.14646L8.35851 11.6514L11.6353 8.15795C11.7298 8.05718 11.8618 8.00001 12 8.00001C12.1382 8.00001 12.2702 8.05718 12.3647 8.15795L15.6415 11.6514L19.1464 8.14646C19.2894 8.00346 19.5045 7.96068 19.6913 8.03807C19.8782 8.11547 20 8.29778 20 8.50001V16.5C20 16.7762 19.7761 17 19.5 17H4.5C4.22386 17 4 16.7762 4 16.5V8.50001C4 8.29778 4.12182 8.11547 4.30866 8.03807Z"
        fill={iconColor}
      />
    </svg>
  );
}
