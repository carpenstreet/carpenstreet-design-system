import Button from './Button/Button';
import IconButton from './IconButton/IconButton.tsx';
import Icon from './Icon/index';
import Typography from './Typography/Typography';
import Grid from './Grid/Grid';
import Checkbox from './Checkbox/Checkbox';

export { Button, IconButton, Typography, Grid, Icon, Checkbox };
export * from './Icon/index';

export default {
  Button,
  IconButton,
  Typography,
  Grid,
  Icon,
  ...Icon,
  Checkbox,
};
