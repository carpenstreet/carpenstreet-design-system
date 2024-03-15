import Button from '@components/Button/Button';
import Letter from '@components/Letter/Letter';
import Icon from '@components/Icon/index';
import Typography from '@components/Typography/Typography';
import Grid from '@components/Grid/Grid';

export { Button, Letter, Typography, Grid, Icon };
export * from '@components/Icon/index';

export default {
  Button,
  Letter,
  Typography,
  Grid,
  Icon,
  ...Icon,
};
