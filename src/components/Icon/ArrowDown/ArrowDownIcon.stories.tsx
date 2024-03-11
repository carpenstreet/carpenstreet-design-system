import { Meta, StoryObj } from '@storybook/react';
import ArrowDownIcon from './ArrowDownIcon';

const meta: Meta = { title: 'Element/Icon/ArrowDown', component: ArrowDownIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ArrowDownIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
