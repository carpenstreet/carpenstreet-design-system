import { Components, Theme } from '@mui/material';

export const overrideCircularProgress = {
  styleOverrides: {
    root: ({ theme }) => ({
      '& .MuiCircularProgress-circle': {
        strokeLinecap: 'round',
        stroke: theme.palette['color/primary/600'],
      },
    }),
  },
} satisfies Components<Theme>['MuiCircularProgress'];
