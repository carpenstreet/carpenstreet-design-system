import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

const ChevronUpIcon = React.forwardRef<SVGSVGElement, IconCommonPropsType>(({ width = 24, height = 24, color = 'color/gray/800' }, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.0223 8.50237C12.2559 8.50191 12.4824 8.58328 12.6623 8.73237L18.6623 13.7324C19.0875 14.0858 19.1457 14.7171 18.7923 15.1424C18.4388 15.5676 17.8075 15.6258 17.3823 15.2724L12.0223 10.7924L6.66228 15.1124C6.45569 15.2801 6.19074 15.3586 5.9261 15.3305C5.66145 15.3023 5.41895 15.1698 5.25228 14.9624C5.06714 14.7545 4.97702 14.4789 5.00359 14.2018C5.03016 13.9247 5.17102 13.6713 5.39228 13.5024L11.3923 8.67237C11.5774 8.54685 11.7992 8.48699 12.0223 8.50237Z"
        fill={iconColor}
      />
    </svg>
  );
});

export default ChevronUpIcon;
