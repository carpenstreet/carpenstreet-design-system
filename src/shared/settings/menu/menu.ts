import { Components, Theme } from '@mui/material';

export const overrideMenu = {
  defaultProps: {
    transitionDuration: 0,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      '& .MuiPaper-root': {
        backgroundColor: theme.palette['color/white'],
        boxShadow: theme.shadows[4],
        borderRadius: '8px',
        height: '160px',

        '&::-webkit-scrollbar': {
          width: '14px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#c3c3c5',
          border: '4px solid transparent',
          borderRadius: '10px',
          backgroundClip: 'padding-box',
        },
        '& .MuiList-root': {
          padding: '0px',
          width: 'unset',
        },
      },
    }),
  },
} satisfies Components<Theme>['MuiMenu'];
