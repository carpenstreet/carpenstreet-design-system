import { Meta, StoryObj } from '@storybook/react';
import SearchIcon from './SearchIcon';

const meta: Meta = { title: 'Element/Icon/Search', component: SearchIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof SearchIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
