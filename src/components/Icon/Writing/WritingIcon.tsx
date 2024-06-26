import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

const WritingIcon = React.forwardRef<SVGSVGElement, IconCommonPropsType>(({ width = 24, height = 24, color = 'color/gray/800' }, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4345 4.1396L4.72918 16.8449L4.15284 18.847L6.15488 18.2706L18.8602 5.5653L17.4345 4.1396ZM3.57978 19.0119C3.58026 19.0118 3.58073 19.0117 3.5812 19.0115L3.57978 19.0119ZM16.2518 2.49383C16.9103 1.83539 17.9587 1.83539 18.6172 2.49383L20.506 4.38264C21.1644 5.04108 21.1644 6.08952 20.506 6.74796L7.51203 19.7419C7.30037 19.9536 7.06242 20.079 6.82644 20.1576C6.81333 20.162 6.80013 20.1661 6.78686 20.1699L4.1359 20.9331C4.13566 20.9331 4.13542 20.9332 4.13518 20.9333C2.87011 21.2989 1.70097 20.1298 2.06649 18.8648C2.06657 18.8645 2.06665 18.8642 2.06674 18.8639L2.82634 16.2253C2.90767 15.9197 3.0794 15.6663 3.2579 15.4878L16.2518 2.49383ZM8.9998 20C8.9998 19.4477 9.44751 19 9.9998 19H20.9998C21.5521 19 21.9998 19.4477 21.9998 20C21.9998 20.5523 21.5521 21 20.9998 21H9.9998C9.44751 21 8.9998 20.5523 8.9998 20Z"
        fill={iconColor}
      />
    </svg>
  );
});

export default WritingIcon;
