import { Meta, StoryObj } from '@storybook/react';
import CloseIcon from './CloseIcon';

const meta: Meta = { title: 'Element/Icon/Close', component: CloseIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CloseIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
