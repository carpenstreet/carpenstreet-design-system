import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const StarIcon = React.forwardRef<SVGSVGElement>(({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L15.2756 8.86417L22 10.0937L17.3 14.9474L18.1803 21.5714L12 18.707L5.81966 21.5714L6.7 14.9474L2 10.0937L8.72442 8.86417L12 3Z" fill={iconColor} />
    </svg>
  );
});

export default StarIcon;
