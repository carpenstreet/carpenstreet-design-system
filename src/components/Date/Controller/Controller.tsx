import React from 'react';
import Divider from '../../Divider/Divider.tsx';
import { Box } from '@mui/material';
import Button from '../../Button/Button.tsx';
import { ControllerProps } from './Controller.types.ts';

export default function Controller({ onResetDate, onClose, locale, sx: sxOverride }: ControllerProps) {
  const buttonText = {
    ko: {
      reset: '선택 초기화',
      completed: '선택 완료',
    },
    en: {
      reset: 'Reset',
      completed: 'Completed',
    },
  };

  return (
    <>
      <Divider />
      <Box
        sx={{
          padding: '12px 28px 0 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          ...sxOverride,
        }}
      >
        <Button variant={'text'} size={'S'} onClick={onResetDate}>
          {buttonText[locale].reset}
        </Button>
        <Button variant={'contained'} size={'M'} color={'primary'} onClick={onClose}>
          {buttonText[locale].completed}
        </Button>
      </Box>
    </>
  );
}
