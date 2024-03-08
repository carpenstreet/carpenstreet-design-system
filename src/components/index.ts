import Button from '@components/Button/Button.tsx';
import Letter from '@components/Letter/Letter.tsx';
import Shadow from '@components/Shadow/Shadow.tsx';
import Icon from '@components/Icon/index.ts';
import Typography from '@components/Typography/Typography.tsx';
import { color } from '@shared/settings/Color.ts';

export { Button, Letter, Shadow, Typography, Icon, color };
export * from '@components/Icon/index.ts';

export default {
  Button,
  Letter,
  Shadow,
  Typography,
  Icon,
  ...Icon,
  color,
};
