import { Meta, StoryObj } from '@storybook/react';
import SearchIcon from './SearchIcon';

const meta: Meta = { title: 'Element/Icon/Gnb/SearchIcon', component: SearchIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof SearchIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
