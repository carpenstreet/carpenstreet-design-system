import { Meta, StoryObj } from '@storybook/react';
import FilterIcon from './FilterIcon';

const meta: Meta = { title: 'Element/Icon/Filter', component: FilterIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof FilterIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
