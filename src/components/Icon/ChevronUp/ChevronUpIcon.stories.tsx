import { Meta, StoryObj } from '@storybook/react';
import ChevronUpIcon from './ChevronUpIcon';

const meta: Meta = { title: 'Element/Icon/ChevronUp', component: ChevronUpIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ChevronUpIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
