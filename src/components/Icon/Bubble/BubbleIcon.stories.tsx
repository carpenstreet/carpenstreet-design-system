import { Meta, StoryObj } from '@storybook/react';
import BubbleIcon from './BubbleIcon';

const meta: Meta = { title: 'Element/Icon/Bubble', component: BubbleIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof BubbleIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
