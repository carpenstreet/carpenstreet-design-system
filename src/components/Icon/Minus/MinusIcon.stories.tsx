import { Meta, StoryObj } from '@storybook/react';
import MinusIcon from './MinusIcon';

const meta: Meta = { title: 'Element/Icon/Minus', component: MinusIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof MinusIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
