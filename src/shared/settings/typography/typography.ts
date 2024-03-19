import { Components, Theme } from '@mui/material';

export const overrideTypography = {
  styleOverrides: {
    root: {
      fontFamily: '"Pretendard Variable", Pretendard',
      letterSpacing: '0',
    },
  },
} satisfies Components<Theme>['MuiTypography'];
