import React from 'react';
import { BottomSheetProps } from './BottomSheet.types.ts';
import Button from '../Button/Button.tsx';
import BottomSheet from '../BottomSheet/BottomSheet.tsx';

export default function ExampleBottomSheet(props: BottomSheetProps) {
  const [showModal, setShowModal] = React.useState(false);

  const handleButtonClick = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <React.Fragment>
      <Button variant={'contained'} size={'M'} onClick={handleButtonClick}>
        Click Me
      </Button>

      <BottomSheet open={showModal} onClose={handleModalClose} {...props} />
    </React.Fragment>
  );
}
