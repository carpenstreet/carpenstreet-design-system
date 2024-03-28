import { AvatarProps, Box } from '@mui/material';
import Avatar from './Avatar.tsx';

export default function ExampleAvatar(props: AvatarProps) {
  const { src, alt, ...rest } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '48px',
      }}
    >
      <Avatar {...rest} />
      <Avatar {...props} />
    </Box>
  );
}
