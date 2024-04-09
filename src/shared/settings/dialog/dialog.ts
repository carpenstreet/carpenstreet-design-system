import { Components, Theme } from '@mui/material';

export const overrideDialog = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      '& .MuiPaper-root': {
        backgroundColor: 'white',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
      },
      '& .MuiBackdrop-root': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    }),
  },
} satisfies Components<Theme>['MuiDialog'];
