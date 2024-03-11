import { Meta, StoryObj } from '@storybook/react';
import ChevronRightIcon from './ChevronRightIcon';

const meta: Meta = { title: 'Element/Icon/ChevronRight', component: ChevronRightIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ChevronRightIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
