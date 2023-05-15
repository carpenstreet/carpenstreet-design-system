import { Meta, StoryObj } from '@storybook/react';
import ImageIcon from './ImageIcon';

const meta: Meta = { title: 'Icon/Product/ImageIcon', component: ImageIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ImageIcon>;

export const Default: Story = {
  args: {
    size: 12,
  },
};
