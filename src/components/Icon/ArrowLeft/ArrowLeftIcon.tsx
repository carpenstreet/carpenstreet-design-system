import React from 'react';
import { IconCommonPropsType } from '@components/Icon/Icon.types';
import { colorPalette } from '@shared/settings/Color';

const ArrowLeftIcon = ({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) => {
  const iconColor = colorPalette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12C20 11.4477 19.5523 11 19 11L5 11C4.44771 11 4 11.4477 4 12C4 12.5523 4.44771 13 5 13L19 13C19.5523 13 20 12.5523 20 12Z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7071 19.7071C13.0976 19.3166 13.0976 18.6834 12.7071 18.2929L6.41421 12L12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ArrowLeftIcon;
