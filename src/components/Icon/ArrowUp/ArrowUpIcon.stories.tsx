import { Meta, StoryObj } from '@storybook/react';
import ArrowUpIcon from './ArrowUpIcon';

const meta: Meta = { title: 'Element/Icon/ArrowUp', component: ArrowUpIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ArrowUpIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
