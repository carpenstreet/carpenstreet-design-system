import { Components, Theme } from '@mui/material';

export const overrideRadio = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      padding: 0,
      ...(ownerState.color === 'primary' && {
        '& path.path-fill': {
          fill: theme.palette['color/primary/600'],
        },
      }),
      ...(ownerState.size === 'S' && {
        '& svg': {
          width: 20,
          height: 20,
        },
      }),
      '&.Mui-disabled': {
        '& path.path-fill': {
          fill: theme.palette['color/gray/200'],
        },
      },
    }),
  },
} satisfies Components<Theme>['MuiRadio'];
