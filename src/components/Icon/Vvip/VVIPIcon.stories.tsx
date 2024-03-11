import { Meta, StoryObj } from '@storybook/react';
import VVIPIcon from './VVIPIcon';

const meta: Meta = { title: 'Element/Icon/VVIP', component: VVIPIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof VVIPIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
