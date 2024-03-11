import { Meta, StoryObj } from '@storybook/react';
import BoxIcon from './BoxIcon';

const meta: Meta = { title: 'Element/Icon/Box', component: BoxIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof BoxIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
