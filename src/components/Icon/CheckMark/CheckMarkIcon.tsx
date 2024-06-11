import { IconCommonPropsType } from '../Icon.types.ts';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const CheckMarkIcon = React.forwardRef<SVGSVGElement, IconCommonPropsType>(({ width = 24, height = 24, color = 'color/gray/800' }, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="ic_check">
        <path
          id="Vector 736 (Stroke)"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.9714 4.36227C13.2318 4.62264 13.2318 5.04478 12.9714 5.30514L7.30474 10.9722C7.04439 11.2326 6.62228 11.2326 6.36193 10.9722L3.69526 8.30536C3.43491 8.04499 3.43491 7.62285 3.69526 7.36248C3.95561 7.10211 4.37772 7.10211 4.63807 7.36248L6.83333 9.5579L12.0286 4.36227C12.2889 4.1019 12.7111 4.1019 12.9714 4.36227Z"
          fill={iconColor}
        />
      </g>
    </svg>
  );
});

export default CheckMarkIcon;
