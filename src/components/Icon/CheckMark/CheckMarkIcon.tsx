import { IconCommonPropsType } from '../Icon.types.ts';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const CheckMarkIcon = React.forwardRef<SVGSVGElement, IconCommonPropsType>(({ width = 24, height = 24, color = 'color/gray/800' }, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4571 6.5446C19.8476 6.93513 19.8476 7.56829 19.4571 7.95882L10.9571 16.4588C10.5666 16.8493 9.93342 16.8493 9.54289 16.4588L5.54289 12.4588C5.15237 12.0683 5.15237 11.4351 5.54289 11.0446C5.93342 10.6541 6.56658 10.6541 6.95711 11.0446L10.25 14.3375L18.0429 6.5446C18.4334 6.15408 19.0666 6.15408 19.4571 6.5446Z"
        fill={iconColor}
      />
    </svg>
  );
});

export default CheckMarkIcon;
