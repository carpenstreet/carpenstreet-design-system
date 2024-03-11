import { Meta, StoryObj } from '@storybook/react';
import RemoveIcon from './RemoveIcon';

const meta: Meta = { title: 'Element/Icon/Remove', component: RemoveIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof RemoveIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
