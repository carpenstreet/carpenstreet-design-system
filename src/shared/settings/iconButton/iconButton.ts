import { Components, Theme } from '@mui/material';

export const overrideIconButton = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      backgroundColor: 'transparent',

      // Size
      ...(ownerState.size === 'M' && {
        width: '36px',
        height: '36px',
        padding: '6px',
        borderRadius: '8px',
        '& > svg': {
          width: '24px',
          height: '24px',
        },
      }),
      ...(ownerState.size === 'S' && {
        width: '24px',
        height: '24px',
        padding: '4px',
        borderRadius: '4px',
        '& > svg': {
          width: '16px',
          height: '16px',
        },
      }),
      // Color
      ...(ownerState.color === 'primary' && {
        '&:hover': {
          backgroundColor: theme.palette['color/primary/dim/100'],
        },
        '& path, & circle': {
          fill: theme.palette['color/primary/600'],
        },
        '& rect': {
          stroke: theme.palette['color/primary/600'],
        },
      }),
      ...(ownerState.color === 'default' && {
        '&:hover': {
          backgroundColor: theme.palette['color/gray/100'],
        },
      }),
      // Disabled
      '&.Mui-disabled': {
        '& path, & circle': {
          fill: theme.palette['color/gray/200'],
        },
        '& rect': {
          stroke: theme.palette['color/gray/200'],
        },
      },
    }),
  },
} satisfies Components<Theme>['MuiIconButton'];
