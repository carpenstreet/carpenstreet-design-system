import { LabelProps } from './Label.types.ts';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '../Typography/Typography.tsx';

export default function Label(props: LabelProps) {
  const { children, color, ...rest } = props;
  const theme = useTheme();
  const layout = {};
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        height: '22px',
        padding: '4px 8px',
        borderRadius: '4px',
        backgroundColor: theme.palette['color/primary/600'],
        color: theme.palette['color/white'],
      }}
    >
      <Typography variant={'typography/label/medium/bold'} color={'color/white'}>
        {children}
      </Typography>
    </Box>
  );
}
