import { LabelPartnershipProps } from './LabelPartnership.types.ts';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { VVIPIcon } from '../Icon';
import Typography from '../Typography/Typography.tsx';

export default function LabelPartnership(props: LabelPartnershipProps) {
  const { partnership, size = 'M', sx } = props;

  const theme = useTheme();

  const boxStyle = (() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    borderRadius: '100px',
    gap: '2px',
    padding: size === 'M' ? '4px 12px' : '2px 8px',
    background: theme.palette[`color/partnership/${partnership}`],
  }))();

  const boxSx = { ...boxStyle, ...sx };

  const iconSize = size === 'M' ? 20 : 16;

  const typoVariant = size === 'M' ? 'typography/body/small/bold' : 'typography/label/large/bold';

  const labelText = partnership === 'vvip' ? 'VVIP' : partnership === 'vip' ? 'VIP' : 'Partner';

  return (
    <Box sx={boxSx}>
      <VVIPIcon color={'color/white'} width={iconSize} height={iconSize} />
      <Typography variant={typoVariant} color={'color/white'}>
        {labelText}
      </Typography>
    </Box>
  );
}
