import { Components, Theme } from '@mui/material';

export const overrideMenuItem = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: '6px 16px',
      display: 'flex',
      minHeight: 'auto',

      '&:hover': {
        backgroundColor: theme.palette['color/gray/dim/100'],
      },
      '&.Mui-selected': {
        backgroundColor: theme.palette['color/primary/dim/100'],
      },
      '& .MuiTypography-root': {
        width: '100%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
    }),
  },
} satisfies Components<Theme>['MuiMenuItem'];
