import MUIAvatar, { AvatarProps as MUIAvatarProps } from '@mui/material/Avatar';
import { ProfileFilledIcon } from '../Icon';

export default function Avatar(props: MUIAvatarProps) {
  const { children, ...rest } = props;
  const { src } = rest;

  const iconDimension = { width: 16, height: 16 };
  const childrenToRender = src && src !== '' ? null : <ProfileFilledIcon {...iconDimension} />;

  return <MUIAvatar {...rest}>{childrenToRender}</MUIAvatar>;
}
