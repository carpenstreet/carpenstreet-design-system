import { Meta, StoryObj } from '@storybook/react';
import CafeRestaurantBarIcon from './CafeRestaurantBarIcon';

const meta: Meta = { title: 'Icon/Category/카페식당주점', component: CafeRestaurantBarIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CafeRestaurantBarIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};
