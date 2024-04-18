import { Components, Theme } from '@mui/material';

const center = {
  left: '50%',
  right: 'auto',
  transform: 'translateX(-50%)',
};

const left = { justifyContent: 'flex-start', right: 'auto' };

const right = { justifyContent: 'flex-end', left: 'auto' };

export const overrideSnackbar = {
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: theme.shadows[2],
      borderRadius: '8px',
      padding: '0',
      '& .MuiPaper-root': {
        backgroundColor: theme.palette['color/white'],
        gap: '16px',
        borderRadius: '8px',
        flexWrap: 'nowrap',
        padding: '12px',
        '> div': { padding: 0, minHeight: '24px', display: 'flex', alignItems: 'center' },
      },
      '&.MuiSnackbar-anchorOriginTopLeft': { ...left },
      '&.MuiSnackbar-anchorOriginTopCenter': { ...center },
      '&.MuiSnackbar-anchorOriginTopRight': { ...right },
      '&.MuiSnackbar-anchorOriginBottomLeft': { ...left },
      '&.MuiSnackbar-anchorOriginBottomCenter': { ...center },
      '&.MuiSnackbar-anchorOriginBottomRight': { ...right },
      '& .MuiSnackbarContent-action': {
        padding: '8px 0',
        marginRight: 0,
      },
    }),
  },
} satisfies Components<Theme>['MuiSnackbar'];
