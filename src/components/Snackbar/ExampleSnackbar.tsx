import React from 'react';
import { Box, SnackbarOrigin } from '@mui/material';
import Button from '../Button/Button.tsx';
import Snackbar from './Snackbar.tsx';
import { SnackbarProps } from './Snackbar.types.ts';

export default function ExampleSnackbar(props: SnackbarProps) {
  const [state, setState] = React.useState<{ open: boolean; vertical: 'top' | 'bottom'; horizontal: 'left' | 'center' | 'right' }>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '24px',
        width: '100%',
        height: '500px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button variant={'contained'} size={'M'} color={'primary'} onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
          Top-Left
        </Button>
        <Button variant={'contained'} size={'M'} color={'primary'} onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
          Top-Center
        </Button>

        <Button variant={'contained'} size={'M'} color={'primary'} onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
          Top-Right
        </Button>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button variant={'contained'} size={'M'} color={'primary'} onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
          Bottom-Left
        </Button>

        <Button variant={'contained'} size={'M'} color={'primary'} onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
          Bottom-Center
        </Button>
        <Button variant={'contained'} size={'M'} color={'primary'} onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
          Bottom-Right
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {buttons}
      <Snackbar {...props} anchorOrigin={{ vertical, horizontal }} open={open} onClose={handleClose} />
    </>
  );
}
