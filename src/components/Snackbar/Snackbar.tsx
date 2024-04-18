import React from 'react';
import { Box, Snackbar as MUISnackbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '../Typography/Typography.tsx';
import InformationIcon from '../Icon/Information/InformationIcon.tsx';
import CheckIcon from '../Icon/Check/CheckIcon.tsx';
import AlertIcon from '../Icon/Alert/AlertIcon.tsx';
import NoticeIcon from '../Icon/Notice/NoticeIcon.tsx';
import IconButton from '../IconButton/IconButton.tsx';
import CloseIcon from '../Icon/Close/CloseIcon.tsx';
import { SnackbarProps } from './Snackbar.types.ts';

export default function Snackbar(props: SnackbarProps) {
  const { variant = 'default', showCloseIcon = false, align = 'horizontal', iconToTop, ...muiSnackbarProps } = props;
  const { message, action, sx: sxOverride, ...rest } = muiSnackbarProps;
  const { onClose } = rest;

  const theme = useTheme();

  const sx = {
    ...(variant === 'default' && {
      '& .MuiPaper-root': {
        backgroundColor: theme.palette['color/gray/700'],
        ...(iconToTop && { alignItems: 'start' }),
      },
    }),

    ...(iconToTop && {
      '& .MuiPaper-root': {
        alignItems: 'start',
      },
    }),

    ...sxOverride,
  };

  const typoColor = variant === 'default' ? 'color/white' : 'color/gray/800';

  const iconDimension = { width: 16, height: 16 };

  const iconBoxSx = {
    width: '32px',
    height: '32px',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    ...(iconToTop && {
      alignSelf: 'start',
    }),
  };

  const StateIcon =
    variant === 'info' ? (
      <Box sx={{ ...iconBoxSx, backgroundColor: theme.palette['color/state/infoDim/300'] }}>
        <InformationIcon {...iconDimension} color={'color/state/info'} />
      </Box>
    ) : variant === 'success' ? (
      <Box sx={{ ...iconBoxSx, backgroundColor: theme.palette['color/state/successDim/300'] }}>
        <CheckIcon {...iconDimension} color={'color/state/success'} />
      </Box>
    ) : variant === 'warning' ? (
      <Box sx={{ ...iconBoxSx, backgroundColor: theme.palette['color/state/warningDim/300'] }}>
        <AlertIcon {...iconDimension} color={'color/state/warning'} />
      </Box>
    ) : (
      <Box sx={{ ...iconBoxSx, backgroundColor: theme.palette['color/state/errorDim/300'] }}>
        <NoticeIcon {...iconDimension} color={'color/state/error'} />
      </Box>
    );

  const Message = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      {variant !== 'default' && variant !== 'white' && StateIcon}
      <Box
        sx={{
          ...(align === 'vertical' && {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'start',
          }),
        }}
      >
        <Typography variant={'typography/body/small/medium'} color={typoColor}>
          {message}
        </Typography>
        {align === 'vertical' && action}
      </Box>
    </Box>
  );

  const Action =
    action || showCloseIcon ? (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        {align === 'horizontal' && action}
        {showCloseIcon && (
          <IconButton
            size={'S'}
            color={'default'}
            onClick={(e) => {
              onClose(e, 'clickaway');
            }}
            sx={{
              ...(variant === 'default' && {
                '&:hover': {
                  backgroundColor: theme.palette['color/gray/800'],
                  '& path': {
                    fill: theme.palette['color/gray/100'],
                  },
                },
                '& path': {
                  fill: theme.palette['color/gray/100'],
                },
              }),
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Box>
    ) : null;

  return <MUISnackbar {...rest} sx={sx} message={Message} action={Action} />;
}
