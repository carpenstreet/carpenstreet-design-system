import { Meta, StoryObj } from '@storybook/react';
import CopyIcon from './CopyIcon';

const meta: Meta = { title: 'Element/Icon/Copy', component: CopyIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CopyIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
