import { Components, Theme } from '@mui/material';

export const overrideTab = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      boxSizing: 'border-box',
      opacity: 'unset',
      textTransform: 'unset',
      borderRadius: 'unset',
      width: 'fit-content',
      minWidth: 'unset',
      minHeight: 'unset',

      '&:hover, &.Mui-selected': {
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '2px',
          backgroundColor: theme.palette['color/primary/600'],
        },
        '& > span': {
          fontWeight: 700,
        },
      },

      '&.Mui-disabled': {
        opacity: 'unset',
        '& > span': {
          color: theme.palette['color/gray/200'],
        },
      },
    }),
  },
} satisfies Components<Theme>['MuiTab'];
