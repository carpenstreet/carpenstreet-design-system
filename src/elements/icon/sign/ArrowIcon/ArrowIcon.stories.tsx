import { Meta, StoryObj } from '@storybook/react';
import ArrowIcon from './ArrowIcon';

const meta: Meta = { title: 'Elements/Icon/Sign/ArrowIcon', component: ArrowIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ArrowIcon>;

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
