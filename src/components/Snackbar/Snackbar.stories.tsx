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
    close: false,
    align: 'horizontal',
    iconToTop: false,
  },
};

export const WithButton: Story = {
  args: {
    variant: 'success',
    message: 'WITH BUTTON',
    close: true,
    align: 'horizontal',
    iconToTop: false,
    action: (
      <Button variant={'outlined'} color={'primary'} size={'S'}>
        button
      </Button>
    ),
  },
};
