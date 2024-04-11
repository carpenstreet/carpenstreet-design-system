import { styled } from '@mui/material';
import MUIDialog from '@mui/material/Dialog';

export const BottomSheetContainer = styled(MUIDialog)<{ height: 'full' | 'hug' }>`
  & > .MuiDialog-container {
    align-items: end;

    & > .MuiPaper-root {
      width: 100%;
      height: ${(props) => (props.height === 'full' ? '90%' : 'auto')};
      border-radius: 16px 16px 0 0;
      padding: 8px 0 12px 0;
      
      & > .bottomSheet-header {
        display: flex;
        flex-direction: row;
        padding: 0 16px;
        justify-content: flex-end;

        & > .bottomSheet-closeIcon {
          display: flex;
          padding: 6px;
          cursor: pointer;
        }
      }
      
      & > .bottomSheet-title {
        padding: 8px 16px;
      }
      
      & > .bottomSheet-content {
        padding: 8px 16px;
        ${(props) => (props.height === 'full' ? 'flex: 1;' : '')}
      }
      
      & > .bottomSheet-actions {
        padding: 24px 16px;
      }
    },
  }
`;
