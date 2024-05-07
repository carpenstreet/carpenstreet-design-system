import { Components, Theme } from '@mui/material';

export const overrideTooltip = {
  defaultProps: {
    slotProps: {
      popper: {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: (props) => {
                const placementTitle = props.placement.split('-')[0];
                if (['top', 'bottom'].includes(placementTitle)) return [0, -4.69];
                return [0, 0.34];
              },
            },
          },
        ],
      },
    },
  },
  styleOverrides: {
    tooltip: ({ ownerState, theme }) => ({
      borderRadius: '4px',
      padding: '6px 8px',
      display: 'flex',

      '&.MuiTooltip-tooltipPlacementBottom': {
        '& .MuiTooltip-arrow::before': {
          borderRadius: '2px 0 0 0',
        },
      },

      '&.MuiTooltip-tooltipPlacementRight': {
        '& .MuiTooltip-arrow::before': {
          borderRadius: '0 0 0 2px',
        },
      },

      '&.MuiTooltip-tooltipPlacementLeft': {
        '& .MuiTooltip-arrow::before': {
          borderRadius: '0 2px 0 0',
        },
      },

      '&.MuiTooltip-tooltipPlacementTop': {
        '& .MuiTooltip-arrow::before': {
          borderRadius: '0 0 2px 0',
        },
      },

      ...(ownerState.color === 'default' && {
        backgroundColor: theme.palette['color/gray/700'],
      }),
      ...(ownerState.color === 'grayishViolet' && {
        backgroundColor: theme.palette['color/background/9'],
      }),
      ...(ownerState.color === 'primary' && {
        backgroundColor: theme.palette['color/primary/600'],
      }),

      ...(ownerState.direction === 'none' && {
        // direction none은 기본적으로 Bottom의 offset이 적용되어 있습니다.
        // 따라서 bottom의 기본 offset인 -4.69px를 none의 margin-top인 8px과 함께 더해줍니다.
        marginTop: 'calc(8px + 4.69px) !important',
      }),
    }),
    arrow: ({ ownerState, theme }) => ({
      ...(ownerState.color === 'default' && {
        color: theme.palette['color/gray/700'],
      }),
      ...(ownerState.color === 'grayishViolet' && {
        color: theme.palette['color/background/9'],
      }),
      ...(ownerState.color === 'primary' && {
        color: theme.palette['color/primary/600'],
      }),
    }),
  },
} satisfies Components<Theme>['MuiTooltip'];
