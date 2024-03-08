import { Meta, StoryObj } from '@storybook/react';
import StarIcon from './StarIcon';

const meta: Meta = { title: 'Element/Icon/Star', component: StarIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof StarIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: '#313135',
  },
};
