import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

const ChevronDownIcon = ({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.0003 15.5013C11.7666 15.5017 11.5402 15.4204 11.3603 15.2713L5.3603 10.2713C4.93504 9.91781 4.87684 9.28653 5.2303 8.86128C5.58376 8.43602 6.21504 8.37781 6.6403 8.73128L12.0003 13.2113L17.3603 8.89128C17.5669 8.7235 17.8318 8.64501 18.0965 8.67316C18.3611 8.70131 18.6036 8.8338 18.7703 9.04128C18.9554 9.24913 19.0456 9.52475 19.019 9.80183C18.9924 10.0789 18.8516 10.3324 18.6303 10.5013L12.6303 15.3313C12.4452 15.4568 12.2234 15.5166 12.0003 15.5013Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ChevronDownIcon;
