import React from 'react';
import { IconCommonPropsType } from '../Icon.types';
import { useTheme } from '@mui/material/styles';

const CloseIcon = React.forwardRef<SVGSVGElement, IconCommonPropsType>(({ width = 24, height = 24, color = 'color/gray/800' }, ref) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg ref={ref} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.4032 11.9962L17.6976 7.70975C18.0892 7.31795 18.0892 6.68272 17.6976 6.29092C17.306 5.89912 16.671 5.89912 16.2794 6.29092L11.995 10.5874L7.71063 6.29092C7.31902 5.89912 6.68409 5.89912 6.29248 6.29092C5.90087 6.68272 5.90087 7.31795 6.29248 7.70975L10.5869 11.9962L6.29248 16.2827C6.10342 16.4703 5.99707 16.7257 5.99707 16.9921C5.99707 17.2585 6.10342 17.5139 6.29248 17.7015C6.48 17.8907 6.73527 17.9971 7.00156 17.9971C7.26784 17.9971 7.52311 17.8907 7.71063 17.7015L11.995 13.4051L16.2794 17.7015C16.4669 17.8907 16.7222 17.9971 16.9885 17.9971C17.2548 17.9971 17.51 17.8907 17.6976 17.7015C17.8866 17.5139 17.993 17.2585 17.993 16.9921C17.993 16.7257 17.8866 16.4703 17.6976 16.2827L13.4032 11.9962Z"
        fill={iconColor}
      />
    </svg>
  );
});

export default CloseIcon;
