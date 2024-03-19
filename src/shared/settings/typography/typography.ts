import { Components, Theme } from '@mui/material';

export const overrideTypography = {
  styleOverrides: {
    root: {
      letterSpacing: '0',
    },
  },
} satisfies Components<Theme>['MuiTypography'];
