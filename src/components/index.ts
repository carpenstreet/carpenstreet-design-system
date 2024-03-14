import Button from '@components/Button/Button';
import Letter from '@components/Letter/Letter';
import Shadow from '@components/Shadow/Shadow';
import Icon from '@components/Icon/index';
import Typography from '@components/Typography/Typography';
import Grid from '@components/Grid/Grid';

export { Button, Letter, Shadow, Typography, Grid, Icon };
export * from '@components/Icon/index';

export default {
  Button,
  Letter,
  Shadow,
  Typography,
  Grid,
  Icon,
  ...Icon,
};
