import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

const ChevronLeftIcon = React.forwardRef<SVGSVGElement>(({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.8302 19.0001C13.5276 19.0011 13.2408 18.865 13.0502 18.6301L8.22016 12.6301C7.91685 12.2611 7.91685 11.7291 8.22016 11.3601L13.2202 5.36005C13.5736 4.9348 14.2049 4.87659 14.6302 5.23005C15.0554 5.58352 15.1136 6.2148 14.7602 6.64005L10.2902 12.0001L14.6102 17.3601C14.8599 17.6598 14.9125 18.0773 14.7449 18.4296C14.5774 18.7819 14.2202 19.0046 13.8302 19.0001Z"
        fill={iconColor}
      />
    </svg>
  );
});

export default ChevronLeftIcon;
