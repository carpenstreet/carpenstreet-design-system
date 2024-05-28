import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

const CreditCardIcon = React.forwardRef<SVGSVGElement, IconCommonPropsType>(({ width = 24, height = 24, color = 'color/gray/800' }, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 6.07031C1 4.71657 2.09743 3.61914 3.45117 3.61914H20.5488C21.9026 3.61914 23 4.71657 23 6.07031V7.59912H1V6.07031ZM1 9.09912H23V17.9299C23 19.2836 21.9026 20.381 20.5488 20.381H3.45117C2.09743 20.381 1 19.2836 1 17.9299V9.09912ZM15.6094 17.48H19.7344V15.98H15.6094V17.48Z"
        fill={iconColor}
      />
    </svg>
  );
});

export default CreditCardIcon;
