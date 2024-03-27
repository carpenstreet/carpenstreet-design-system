import { IconCommonPropsType } from '../Icon.types.ts';
import { useTheme } from '@mui/material/styles';

export default function CheckOutlineIcon({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9883 19.9901C16.4066 19.9901 19.9883 16.4084 19.9883 11.9901C19.9883 7.57183 16.4066 3.99011 11.9883 3.99011C7.57 3.99011 3.98828 7.57183 3.98828 11.9901C3.98828 16.4084 7.57 19.9901 11.9883 19.9901ZM11.9883 21.9901C17.5111 21.9901 21.9883 17.513 21.9883 11.9901C21.9883 6.46726 17.5111 1.99011 11.9883 1.99011C6.46543 1.99011 1.98828 6.46726 1.98828 11.9901C1.98828 17.513 6.46543 21.9901 11.9883 21.9901Z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6644 8.24271C17.0772 8.60963 17.1143 9.2417 16.7474 9.65449L11.4141 15.6545C11.2243 15.868 10.9523 15.9901 10.6667 15.9901C10.381 15.9901 10.109 15.868 9.91927 15.6545L7.2526 12.6545C6.88568 12.2417 6.92286 11.6096 7.33565 11.2427C7.74843 10.8758 8.3805 10.913 8.74742 11.3258L10.6667 13.4849L15.2526 8.32576C15.6195 7.91298 16.2516 7.8758 16.6644 8.24271Z"
        fill={iconColor}
      />
    </svg>
  );
}
