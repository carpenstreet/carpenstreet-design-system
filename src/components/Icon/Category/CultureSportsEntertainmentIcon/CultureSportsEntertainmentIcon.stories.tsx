import { Meta, StoryObj } from '@storybook/react';
import CultureSportsEntertainmentIcon from './CultureSportsEntertainmentIcon';

const meta: Meta = { title: 'Element/Icon/Category/문화체육엔터', component: CultureSportsEntertainmentIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CultureSportsEntertainmentIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};
