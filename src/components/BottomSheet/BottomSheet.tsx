import React from 'react';
import { Box, Stack } from '@mui/material';
import { BottomSheetProps } from './BottomSheet.types.ts';
import SlideUpTransition from './transition/SlideTransition';
import { BottomSheetContainer } from './BottomSheet.styles.ts';
import CloseIcon from '../Icon/Close/CloseIcon.tsx';

export default function BottomSheet({ height, showCloseIcon = true, renderTitle, renderContent, renderActions, onClose, ...rest }: BottomSheetProps) {
  const handleBottomSheetClose = () => onClose && onClose({}, 'backdropClick');

  return (
    <BottomSheetContainer height={height} TransitionComponent={SlideUpTransition} {...rest} onClose={handleBottomSheetClose}>
      {showCloseIcon && (
        <Stack className={'bottomSheet-header'}>
          <Box onClick={handleBottomSheetClose} className={'bottomSheet-closeIcon'}>
            <CloseIcon width={24} height={24} />
          </Box>
        </Stack>
      )}

      {renderTitle && <Box className={'bottomSheet-title'}>{renderTitle}</Box>}
      {renderContent && <Box className={'bottomSheet-content'}>{renderContent}</Box>}
      {renderActions && <Box className={'bottomSheet-actions'}>{renderActions}</Box>}
    </BottomSheetContainer>
  );
}
