import { Meta, StoryObj } from '@storybook/react';
import ChevronLeftIcon from './ChevronLeftIcon';

const meta: Meta = { title: 'Element/Icon/ChevronLeft', component: ChevronLeftIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ChevronLeftIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
