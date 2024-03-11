import React from 'react';
import { IconCommonPropsType } from '@components/Icon/Icon.types';
import { colorPalette } from '@shared/settings/Color';

const InformationIcon = ({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) => {
  const iconColor = colorPalette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16L13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V16ZM12 7C11.4477 7 11 7.44771 11 8C11 8.55229 11.4477 9 12 9C12.5523 9 13 8.55229 13 8C13 7.44771 12.5523 7 12 7Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default InformationIcon;
