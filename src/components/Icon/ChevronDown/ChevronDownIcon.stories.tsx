import { Meta, StoryObj } from '@storybook/react';
import ChevronDownIcon from './ChevronDownIcon';

const meta: Meta = { title: 'Element/Icon/ChevronDown', component: ChevronDownIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ChevronDownIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
