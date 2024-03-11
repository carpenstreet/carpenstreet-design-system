import React from 'react';
import { IconCommonPropsType } from '@components/Icon/Icon.types';
import { colorPalette } from '@shared/settings/Color';

const ArrowUpIcon = ({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) => {
  const iconColor = colorPalette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20C12.5523 20 13 19.5523 13 19V5C13 4.44771 12.5523 4 12 4C11.4477 4 11 4.44771 11 5V19C11 19.5523 11.4477 20 12 20Z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.29289 12.7071C4.68342 13.0976 5.31658 13.0976 5.70711 12.7071L12 6.41421L18.2929 12.7071C18.6834 13.0976 19.3166 13.0976 19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ArrowUpIcon;
