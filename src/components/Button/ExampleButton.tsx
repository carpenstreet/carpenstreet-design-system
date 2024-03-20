import Button from './Button';
import { Box } from '@mui/material';
import ChevronLeftIcon from '@components/Icon/ChevronLeft/ChevronLeftIcon.tsx';
import ChevronRightIcon from '@components/Icon/ChevronRight/ChevronRightIcon.tsx';
import { ButtonProps } from '@components/Button/Button.types.ts';

export default function ExampleButton(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '48px',
      }}
    >
      <Button {...rest}>{children}</Button>
      <Button {...rest} startIcon={<ChevronLeftIcon />} endIcon={<ChevronRightIcon />}>
        {children}
      </Button>
    </Box>
  );
}
