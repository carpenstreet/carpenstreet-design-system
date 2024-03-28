import { Components, Theme } from '@mui/material';

export const overrideAvatar = {
  styleOverrides: {
    root: ({ theme }) => ({
      width: '36px',
      height: '36px',
      background: theme.palette['color/white'],
      color: theme.palette['color/gray/800'],
      '&:after': {
        border: `1px ${theme.palette['color/gray/dim/200']} solid`,
        borderRadius: '100px',
        content: "''",
        display: 'block',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
      },
    }),
  },
} satisfies Components<Theme>['MuiAvatar'];
