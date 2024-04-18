import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui';
import ExampleSnackbar from './ExampleSnackbar';
import Button from '../Button/Button.tsx';

const meta: Meta<typeof ExampleSnackbar> = {
  title: 'Component/Snackbar',
  component: ExampleSnackbar,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleSnackbar>;

export const Default: Story = {
  args: {
    variant: 'default',
    message: 'Snackbar Message',
    showCloseIcon: false,
    align: 'horizontal',
    iconToTop: false,
  },
};

export const WithButtonHorizontal: Story = {
  args: {
    variant: 'success',
    message: 'WITH BUTTON HORIZONTAL',
    showCloseIcon: true,
    align: 'horizontal',
    iconToTop: false,
    action: (
      <Button variant={'outlined'} color={'primary'} size={'S'}>
        button
      </Button>
    ),
  },
};

export const WithButtonVertical: Story = {
  args: {
    variant: 'success',
    message: 'WITH BUTTON VERTICAL',
    showCloseIcon: true,
    align: 'vertical',
    iconToTop: false,
    action: (
      <Button variant={'outlined'} color={'primary'} size={'S'}>
        button
      </Button>
    ),
  },
};

export const IconToTop: Story = {
  args: {
    variant: 'success',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    showCloseIcon: true,
    align: 'horizontal',
    iconToTop: true,
    sx: {
      maxWidth: '300px',
    },
    action: (
      <Button variant={'outlined'} color={'primary'} size={'S'}>
        button
      </Button>
    ),
  },
};
