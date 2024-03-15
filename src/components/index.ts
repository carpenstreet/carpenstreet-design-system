import Button from '@components/Button/Button';
import IconButton from '@components/IconButton/IconButton.tsx';
import Icon from '@components/Icon/index';
import Typography from '@components/Typography/Typography';
import Grid from '@components/Grid/Grid';

export { Button, IconButton, Typography, Grid, Icon };
export * from '@components/Icon/index';

export default {
  Button,
  IconButton,
  Typography,
  Grid,
  Icon,
  ...Icon,
};
