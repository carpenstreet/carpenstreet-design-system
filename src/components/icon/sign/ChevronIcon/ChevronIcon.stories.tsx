import { Meta, StoryObj } from '@storybook/react';
import ChevronIcon from './ChevronIcon';

const meta: Meta = { title: 'Element/Icon/Sign/ChevronIcon', component: ChevronIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ChevronIcon>;

export const Left: Story = {
  args: {
    size: 24,
    direction: 'left',
  },
};
export const Right: Story = {
  args: {
    size: 24,
    direction: 'right',
  },
};
export const Down: Story = {
  args: {
    size: 24,
    direction: 'down',
  },
};
export const Up: Story = {
  args: {
    size: 24,
    direction: 'up',
  },
};
