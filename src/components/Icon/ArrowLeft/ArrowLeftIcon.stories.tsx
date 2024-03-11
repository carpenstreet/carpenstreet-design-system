import { Meta, StoryObj } from '@storybook/react';
import ArrowLeftIcon from './ArrowLeftIcon';

const meta: Meta = { title: 'Element/Icon/ArrowLeft', component: ArrowLeftIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ArrowLeftIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
