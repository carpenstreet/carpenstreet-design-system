import { Meta, StoryObj } from '@storybook/react';
import WritingIcon from './WritingIcon';

const meta: Meta = { title: 'Element/Icon/Writing', component: WritingIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof WritingIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
