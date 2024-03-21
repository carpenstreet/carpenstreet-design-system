import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

const BubbleIcon = ({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.32822 18.1522L6.70455 18.4388V18.9117V20.806L9.02826 19.7972L9.32742 19.6673L9.64352 19.7476C10.3937 19.9382 11.1834 20.0402 12 20.0402C17.0426 20.0402 21.0455 16.1697 21.0455 11.4974C21.0455 6.82509 17.0426 2.95455 12 2.95455C6.95735 2.95455 2.95455 6.82509 2.95455 11.4974C2.95455 14.175 4.25971 16.5774 6.32822 18.1522ZM6.06681 21.0829L6.0678 21.0825L6.06681 21.0829Z"
        stroke={iconColor}
        strokeWidth="1.90909"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 8.85909C7 8.38463 7.38463 8 7.85909 8H16.1409C16.6154 8 17 8.38463 17 8.85909C17 9.33355 16.6154 9.71818 16.1409 9.71818H7.85909C7.38463 9.71818 7 9.33355 7 8.85909ZM7 11.9767C7 11.5022 7.38463 11.1176 7.85909 11.1176H16.1409C16.6154 11.1176 17 11.5022 17 11.9767C17 12.4511 16.6154 12.8357 16.1409 12.8357H7.85909C7.38463 12.8357 7 12.4511 7 11.9767ZM7.85909 14.2351C7.38463 14.2351 7 14.6197 7 15.0942C7 15.5687 7.38463 15.9533 7.85909 15.9533H11.1409C11.6154 15.9533 12 15.5687 12 15.0942C12 14.6197 11.6154 14.2351 11.1409 14.2351H7.85909Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default BubbleIcon;
