import { IconCommonPropsType } from '../Icon.types.ts';
import { useTheme } from '@mui/material/styles';

const ProfileFilledIcon = ({ width = 24, height = 24, color = 'color/gray/800' }: IconCommonPropsType) => {
  const theme = useTheme();
  const iconColor = theme.palette[color];

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4337_1980)">
        <circle cx="12" cy="7" r="3" fill={iconColor} stroke={iconColor} strokeWidth="2" />
        <path d="M12 14C7.58172 14 4 16.6863 4 20H20C20 16.6863 16.4183 14 12 14Z" fill={iconColor} stroke={iconColor} strokeWidth="2" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_4337_1980">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProfileFilledIcon;
