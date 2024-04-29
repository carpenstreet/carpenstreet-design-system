import { IconCommonPropsType } from '../Icon.types.ts';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const CheckIcon = React.forwardRef<SVGSVGElement, IconCommonPropsType>(({ width = 24, height = 24, color = 'color/gray/800' }, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9883 21.9901C17.5111 21.9901 21.9883 17.513 21.9883 11.9901C21.9883 6.46726 17.5111 1.99011 11.9883 1.99011C6.46543 1.99011 1.98828 6.46726 1.98828 11.9901C1.98828 17.513 6.46543 21.9901 11.9883 21.9901ZM16.7357 9.65449C17.1026 9.2417 17.0654 8.60963 16.6527 8.24271C16.2399 7.8758 15.6078 7.91298 15.2409 8.32576L10.655 13.4849L8.7357 11.3258C8.36878 10.913 7.73671 10.8758 7.32393 11.2427C6.91115 11.6096 6.87396 12.2417 7.24088 12.6545L9.90755 15.6545C10.0973 15.868 10.3693 15.9901 10.655 15.9901C10.9406 15.9901 11.2126 15.868 11.4024 15.6545L16.7357 9.65449Z"
        fill={iconColor}
      />
    </svg>
  );
});

export default CheckIcon;
