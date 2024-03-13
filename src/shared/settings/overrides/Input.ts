import { Components } from '@mui/material/styles/components';
import { Theme } from '@mui/material/styles';

const InputSize = {
  S: {
    padding: '8px 14px',
  },
  M: {
    height: '16px 14px',
  },
};

const OverrideOutlinedInput = (theme: Theme): Components['MuiOutlinedInput'] => {
  return {
    styleOverrides: {
      root: ({ ownerState }) => ({
        borderRadius: '8px',
        '& > .MuiInputBase-input': {
          ...InputSize[ownerState.size],
        },

        // default
        '& > .MuiInputBase-input::placeholder': {
          opacity: 1,
          color: theme.palette['color/gray/400'],
          ...theme.typography['typography/body/medium/regular'],
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
          boxShadow: `0 0 0 1px ${theme.palette['color/gray/dim/400']} inset`,
        },

        // hover
        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            boxShadow: `0 0 0 1px ${theme.palette['color/gray/600']} inset`,
          },
        },

        // focused
        '&.Mui-focused': {
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            boxShadow: `0 0 0 1px ${theme.palette['color/primary/600']} inset`,
          },
        },

        // error

        // disabled
      }),
    },
  };
};

const OverrideStandardInput = (theme: Theme): Components['MuiInput'] => ({
  styleOverrides: {
    root: ({ ownerState }) => {
      console.log('ownerState', ownerState);
      return {};
    },
  },
});

export const OverrideInput = (theme: Theme) => ({
  outlinedInput: OverrideOutlinedInput(theme),
  standardInput: OverrideStandardInput(theme),
});
