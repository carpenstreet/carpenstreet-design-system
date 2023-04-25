import { addons } from '@storybook/manager-api';
import carpentheme from './carpentheme';

addons.setConfig({
  theme: carpentheme,
});