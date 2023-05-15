import { Meta, StoryObj } from '@storybook/react';
import RemoveIcon from './RemoveIcon';

const meta: Meta = { title: 'Icon/Product/RemoveIcon', component: RemoveIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof RemoveIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};
