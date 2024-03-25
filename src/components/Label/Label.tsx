import { LabelProps } from './Label.types.ts';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '../Typography/Typography.tsx';

export default function Label(props: LabelProps) {
  const { children, color = 'default', variant, sx } = props;

  const theme = useTheme();

  const boxStyle = (() => {
    const commonStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'fit-content',
      height: '22px',
      padding: '4px 8px',
      borderRadius: '4px',
    };
    if (variant === 'filled') {
      if (color === 'default')
        return {
          ...commonStyle,
          backgroundColor: theme.palette['color/gray/600'],
        };
      if (color === 'primary') return { ...commonStyle, backgroundColor: theme.palette['color/primary/600'] };
      if (color === 'info') return { ...commonStyle, backgroundColor: theme.palette['color/state/info'] };
      if (color === 'success') return { ...commonStyle, backgroundColor: theme.palette['color/state/success'] };
      if (color === 'error') return { ...commonStyle, backgroundColor: theme.palette['color/state/error'] };
    }

    if (variant === 'soft') {
      if (color === 'default')
        return {
          ...commonStyle,
          backgroundColor: theme.palette['color/gray/100'],
        };
      if (color === 'primary') return { ...commonStyle, backgroundColor: theme.palette['color/primary/dim/300'] };
      if (color === 'info') return { ...commonStyle, backgroundColor: theme.palette['color/state/infoDim/300'] };
      if (color === 'success') return { ...commonStyle, backgroundColor: theme.palette['color/state/successDim/300'] };
      if (color === 'error') return { ...commonStyle, backgroundColor: theme.palette['color/state/errorDim/300'] };
    }

    if (variant === 'outlined') {
      if (color === 'default')
        return {
          ...commonStyle,
          backgroundColor: 'transparent',
          boxShadow: `0 0 0 1px ${theme.palette['color/gray/600']} inset`,
        };
      if (color === 'primary') return { ...commonStyle, backgroundColor: 'transparent', boxShadow: `0 0 0 1px ${theme.palette['color/primary/600']} inset` };
      if (color === 'info') return { ...commonStyle, backgroundColor: 'transparent', boxShadow: `0 0 0 1px ${theme.palette['color/state/info']} inset` };
      if (color === 'success') return { ...commonStyle, backgroundColor: 'transparent', boxShadow: `0 0 0 1px ${theme.palette['color/state/success']} inset` };
      if (color === 'error') return { ...commonStyle, backgroundColor: 'transparent', boxShadow: `0 0 0 1px ${theme.palette['color/state/error']} inset` };
    }
    if (variant === 'small') {
      if (color === 'default')
        return {
          ...commonStyle,
          width: '16px',
          height: '16px',
          borderRadius: '100px',
          backgroundColor: theme.palette['color/gray/100'],
        };
      if (color === 'primary') return { ...commonStyle, width: '16px', height: '16px', borderRadius: '100px', backgroundColor: theme.palette['color/primary/600'] };
      if (color === 'info') return { ...commonStyle, width: '16px', height: '16px', borderRadius: '100px', backgroundColor: theme.palette['color/state/info'] };
      if (color === 'success') return { ...commonStyle, width: '16px', height: '16px', borderRadius: '100px', backgroundColor: theme.palette['color/state/success'] };
      if (color === 'error') return { ...commonStyle, width: '16px', height: '16px', borderRadius: '100px', backgroundColor: theme.palette['color/state/error'] };
    }
  })();

  const boxSx = { ...boxStyle, ...sx };

  const typoVariant = variant === 'small' ? 'typography/label/small/bold' : 'typography/label/medium/bold';

  const typoColor = (() => {
    if (variant === 'filled') return 'color/white';
    if (variant === 'soft') {
      if (color === 'default') return 'color/gray/800';
      if (color === 'primary') return 'color/primary/600';
      if (color === 'info') return 'color/state/info';
      if (color === 'success') return 'color/state/success';
      if (color === 'error') return 'color/state/error';
    }
    if (variant === 'outlined') {
      if (color === 'default') return 'color/gray/600';
      if (color === 'primary') return 'color/primary/600';
      if (color === 'info') return 'color/state/info';
      if (color === 'success') return 'color/state/success';
      if (color === 'error') return 'color/state/error';
    }
    if (variant === 'small') return color === 'default' ? 'color/gray/800' : 'color/white';
  })();

  const childrenToRender = variant === 'small' && typeof children === 'string' ? children.slice(0, 1) : children;

  return (
    <Box sx={boxSx}>
      <Typography variant={typoVariant} color={typoColor}>
        {childrenToRender}
      </Typography>
    </Box>
  );
}
