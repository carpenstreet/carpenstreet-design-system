import { SxProps, Theme } from '@mui/material';

export type LabelPartnershipProps = {
  partnership: 'vvip' | 'vip' | 'partner';
  size: 'M' | 'S';
  sx?: SxProps<Theme>;
};
