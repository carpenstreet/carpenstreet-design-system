import { Meta, StoryObj } from '@storybook/react';
import ImageIcon from './ImageIcon';

const meta: Meta = { title: 'Element/Icon/Image', component: ImageIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ImageIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
