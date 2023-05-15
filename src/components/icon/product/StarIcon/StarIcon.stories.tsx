import { Meta, StoryObj } from '@storybook/react';
import StarIcon from './StarIcon';

const meta: Meta = { title: 'Icon/Product/StarIcon', component: StarIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof StarIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
