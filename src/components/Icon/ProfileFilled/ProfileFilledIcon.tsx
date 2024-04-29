import { IconCommonPropsType } from '../Icon.types.ts';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const ProfileFilledIcon = React.forwardRef<SVGSVGElement>(({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4337_1980)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7Z"
          fill={iconColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.74315 14.9574C7.37998 13.7297 9.59541 13 12 13C14.4046 13 16.62 13.7297 18.2569 14.9574C19.894 16.1852 21 17.9578 21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20C3 17.9578 4.10601 16.1852 5.74315 14.9574Z"
          fill={iconColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_4337_1980">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default ProfileFilledIcon;
