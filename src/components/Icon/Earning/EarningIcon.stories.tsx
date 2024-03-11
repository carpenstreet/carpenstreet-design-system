import { Meta, StoryObj } from '@storybook/react';
import EarningIcon from './EarningIcon';

const meta: Meta = { title: 'Element/Icon/Earning', component: EarningIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof EarningIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
