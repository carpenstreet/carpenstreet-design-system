import { Meta, StoryObj } from '@storybook/react';
import ReviewCountIcon from './ReviewCountIcon';

const meta: Meta = { title: 'Icon/Product/ReviewCountIcon', component: ReviewCountIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ReviewCountIcon>;

export const Default: Story = {
  args: {
    size: 12,
  },
};
