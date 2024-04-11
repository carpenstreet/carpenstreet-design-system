import React from 'react';
import Modal from './Modal.tsx';
import Button from '../Button/Button.tsx';
import { ModalProps } from './Modal.types.ts';

export default function ExampleModal(props: ModalProps) {
  const [showModal, setShowModal] = React.useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <Button variant={'contained'} size={'M'} onClick={handleButtonClick}>
        Click Me
      </Button>

      <Modal open={showModal} onClose={handleModalClose} {...props} />
    </React.Fragment>
  );
}
