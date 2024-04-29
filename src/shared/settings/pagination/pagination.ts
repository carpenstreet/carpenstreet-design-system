import { Components, Theme } from '@mui/material';

export const overridePagination = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      '& .MuiPagination-ul': {
        gap: '4px',
      },
      '& .MuiButtonBase-root': {
        padding: 0,
        margin: 0,
        borderRadius: '50%',
        transition: 'unset',

        '& .MuiTypography-root': {
          color: theme.palette['color/gray/800'],
        },

        '&:hover': {
          backgroundColor: theme.palette['color/gray/100'],
        },

        '&:active': {
          transition: 'unset',
          animate: 'unset',
        },

        ...(ownerState.size === 'L' && {
          width: '40px',
          height: '40px',

          '& > svg': {
            width: '22px',
            height: '22px',
          },
        }),
        ...(ownerState.size === 'M' && {
          width: '32px',
          height: '32px',

          '& > svg': {
            width: '20px',
            height: '20px',
          },
        }),

        '&.Mui-selected': {
          backgroundColor: theme.palette['color/gray/800'],

          '& .MuiTypography-root': {
            color: theme.palette['color/white'],
          },

          '&:hover': {
            backgroundColor: theme.palette['color/gray/600'],
          },
        },

        '&.MuiPaginationItem-previousNext': {
          '&.Mui-disabled': {
            opacity: 1,
            '& path': {
              fill: theme.palette['color/gray/200'],
            },
          },
        },

        '& .MuiTouchRipple-root': {
          display: 'none',
        },
      },
    }),
  },
} satisfies Components<Theme>['MuiPagination'];
