import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

const ImageIcon = React.forwardRef<SVGSVGElement>(({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="1.25" stroke={iconColor} strokeWidth="1.5" />
      <path
        d="M18.3906 16.0729L17 17L10.7279 12.1216C10.0057 11.5599 8.99434 11.5599 8.27212 12.1216L2 17V18.6666C2 20.5076 3.49238 22 5.33333 22H18.6667C20.5076 22 22 20.5076 22 18.6666V17L20.6094 16.0729C19.9376 15.625 19.0624 15.625 18.3906 16.0729Z"
        fill={iconColor}
      />
      <circle cx="16.1665" cy="7.83337" r="2.5" fill={iconColor} />
    </svg>
  );
});

export default ImageIcon;
