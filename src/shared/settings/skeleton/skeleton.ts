import { Components, Theme } from '@mui/material';

export const overrideSkeleton = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      ...(ownerState.variant === 'rectangular' && {
        borderRadius: '4px',
      }),
      ...(ownerState.variant === 'rounded' && {
        borderRadius: '16px',
      }),
      backgroundColor: theme.palette['color/gray/dim/200'],
    }),
  },
} satisfies Components<Theme>['MuiSkeleton'];
