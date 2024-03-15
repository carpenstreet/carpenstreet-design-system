import { IconButton as MUIIconButton } from '@mui/material';
import { IconButtonProps } from '@components/IconButton/IconButton.types.ts';

export default function IconButton(props: IconButtonProps) {
  const { children, color = 'default', ...rest } = props;

  return (
    <MUIIconButton color={color} {...rest}>
      {children}
    </MUIIconButton>
  );
}
