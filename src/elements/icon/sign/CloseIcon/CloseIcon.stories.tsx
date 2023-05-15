import { Meta, StoryObj } from '@storybook/react';
import CloseIcon from './CloseIcon';

const meta: Meta = { title: 'Elements/Icon/Sign/CloseIcon', component: CloseIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CloseIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
