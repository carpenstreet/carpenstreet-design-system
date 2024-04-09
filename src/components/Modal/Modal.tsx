import React from 'react';
import { ModalProps } from './Modal.types.ts';
import { Box } from '@mui/material';
import { ModalContainer } from './Modal.styles.ts';

export default function Modal({ renderTitle, renderContent, renderActions, ...rest }: ModalProps) {
  return (
    <ModalContainer {...rest}>
      {(renderTitle || renderContent) && (
        <Box className={'modal-title-content-wrapper'}>
          {renderTitle && <Box className={'modal-title'}>{renderTitle}</Box>}
          {renderContent && <Box className={'modal-content'}>{renderContent}</Box>}
        </Box>
      )}

      {renderActions && <Box className={'modal-actions'}>{renderActions}</Box>}
    </ModalContainer>
  );
}
