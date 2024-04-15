import { Components, Theme } from '@mui/material';

export const overrideDivider = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      borderColor: ownerState.light ? theme.palette['color/gray/dim/100'] : theme.palette['color/gray/dim/200'],
    }),
  },
} satisfies Components<Theme>['MuiDivider'];
