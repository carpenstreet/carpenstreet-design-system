import { IconCommonPropsType } from '../Icon.types.ts';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const NewIcon = React.forwardRef<SVGSVGElement, IconCommonPropsType>(({ width = 20, height = 20, color = 'color/state/sale' }, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="16" height="16" rx="4" fill={iconColor} />
      <path d="M13.2959 6.05005V13.8274H11.7383L8.58008 9.26196H8.52637V13.8274H6.7002V6.05005H8.2793L11.4053 10.6155H11.4697V6.05005H13.2959Z" fill="white" />
    </svg>
  );
});

export default NewIcon;
