import { Meta, StoryObj } from '@storybook/react';
import ArrowRightIcon from './ArrowRightIcon';

const meta: Meta = { title: 'Element/Icon/ArrowRight', component: ArrowRightIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ArrowRightIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
