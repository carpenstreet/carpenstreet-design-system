import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

const ArrowRightIcon = React.forwardRef<SVGSVGElement, IconCommonPropsType>(({ width = 24, height = 24, color = 'color/gray/800' }, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12C4 12.5523 4.44771 13 5 13L19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11L5 11C4.44771 11 4 11.4477 4 12Z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2929 4.29289C10.9024 4.68342 10.9024 5.31658 11.2929 5.70711L17.5858 12L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289Z"
        fill={iconColor}
      />
    </svg>
  );
});

export default ArrowRightIcon;
