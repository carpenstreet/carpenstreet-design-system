import { ALogoProps } from './ALogo.types.ts';
import { useTheme } from '@mui/material/styles';

export default function ALogo({ variant, width = 100, height = 100 }: ALogoProps) {
  const theme = useTheme();

  const colorToApply = theme.palette[variant === 'dark' ? 'color/gray/800' : 'color/primary/600'];

  if (variant === 'no-container')
    return (
      <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.9167 0H77.0833L100 99.9998L68.75 100L66.6667 87.5H33.3333L31.25 99.9998H0L22.9167 0ZM43.0555 29.1667H56.9444L62.8472 64.5833H37.1527L43.0555 29.1667Z"
          fill="white"
        />
      </svg>
    );

  return (
    <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4455_29267)">
        <path d="M0 10C0 4.47715 4.47715 0 10 0H90C95.5228 0 100 4.47715 100 10V90C100 95.5228 95.5228 100 90 100H10C4.47715 100 0 95.5228 0 90V10Z" fill={colorToApply} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.375 23H64.625L77 76.9999L60.125 77L59 70.25H41L39.875 76.9999H23L35.375 23ZM46.25 38.75H53.75L56.9375 57.875H43.0625L46.25 38.75Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4455_29267">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
