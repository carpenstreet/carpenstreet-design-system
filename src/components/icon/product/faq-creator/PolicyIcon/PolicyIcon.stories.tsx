import { Meta, StoryObj } from '@storybook/react';
import PolicyIcon from './PolicyIcon';

const meta: Meta = { title: 'Element/Icon/Product/PolicyIcon', component: PolicyIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof PolicyIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
