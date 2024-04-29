import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

const RemoveIcon = React.forwardRef<SVGSVGElement, IconCommonPropsType>(({ width = 24, height = 24, color = 'color/gray/800' }, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.47715 6.47715 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.0058 14C15.0058 13.7334 14.8993 13.4778 14.71 13.29L13.41 12L14.71 10.71C15.1021 10.3179 15.1021 9.68212 14.71 9.29C14.3179 8.89788 13.6821 8.89788 13.29 9.29L12 10.59L10.71 9.29C10.3179 8.89788 9.68212 8.89788 9.29 9.29C8.89788 9.68212 8.89788 10.3179 9.29 10.71L10.59 12L9.29 13.29C9.10069 13.4778 8.9942 13.7334 8.9942 14C8.9942 14.2666 9.10069 14.5222 9.29 14.71C9.47777 14.8993 9.73336 15.0058 10 15.0058C10.2666 15.0058 10.5222 14.8993 10.71 14.71L12 13.41L13.29 14.71C13.4778 14.8993 13.7334 15.0058 14 15.0058C14.2666 15.0058 14.5222 14.8993 14.71 14.71C14.8993 14.5222 15.0058 14.2666 15.0058 14Z"
        fill={iconColor}
      />
    </svg>
  );
});

export default RemoveIcon;
