import { Components, Theme } from '@mui/material';

export const overrideCheckbox = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      padding: 0,
      ...(ownerState.color === 'primary' && {
        '&.Mui-checked, &.MuiCheckbox-indeterminate': {
          '& rect.rect-fill': {
            fill: theme.palette['color/primary/600'],
          },
        },
      }),
      ...(ownerState.size === 'S' && {
        '& svg': {
          width: 20,
          height: 20,
        },
      }),
      '&.Mui-disabled': {
        '& rect.rect-fill': {
          fill: theme.palette['color/gray/200'],
        },
        '& rect.rect-stroke': {
          stroke: theme.palette['color/gray/dim/200'],
        },
      },
    }),
  },
} satisfies Components<Theme>['MuiCheckbox'];
