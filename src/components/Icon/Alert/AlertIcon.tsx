import { IconCommonPropsType } from '../Icon.types.ts';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const AlertIcon = React.forwardRef<SVGSVGElement>(({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5601 16.3001L14.8901 3.58006C14.2598 2.59406 13.1703 1.99744 12.0001 1.99744C10.8299 1.99744 9.74038 2.59406 9.1101 3.58006L1.4401 16.3001C0.888647 17.2193 0.869586 18.3629 1.3901 19.3001C1.99207 20.3552 3.11533 21.0047 4.3301 21.0001H19.6701C20.8766 21.0129 21.9979 20.3798 22.6101 19.3401C23.1462 18.3927 23.1271 17.2293 22.5601 16.3001ZM12.0001 17.0001C11.4478 17.0001 11.0001 16.5523 11.0001 16.0001C11.0001 15.4478 11.4478 15.0001 12.0001 15.0001C12.5524 15.0001 13.0001 15.4478 13.0001 16.0001C13.0001 16.5523 12.5524 17.0001 12.0001 17.0001ZM12.0001 14.0001C12.5524 14.0001 13.0001 13.5523 13.0001 13.0001V9.00006C13.0001 8.44778 12.5524 8.00006 12.0001 8.00006C11.4478 8.00006 11.0001 8.44778 11.0001 9.00006V13.0001C11.0001 13.5523 11.4478 14.0001 12.0001 14.0001Z"
        fill={iconColor}
      />
    </svg>
  );
});

export default AlertIcon;
