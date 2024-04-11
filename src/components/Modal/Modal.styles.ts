import { styled } from '@mui/material';
import MUIDialog from '@mui/material/Dialog';

export const ModalContainer = styled(MUIDialog)<{ size: 'M' | 'S' }>`
  & .MuiPaper-root {
    width: ${(props) => (props.size === 'M' ? '400px' : '328px')};
    border-radius: 16px;
    padding: 40px 24px 24px 24px;

    & .modal-title-content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    & .modal-actions {
      padding: 24px 0 0 0;
    }
  }
`;
