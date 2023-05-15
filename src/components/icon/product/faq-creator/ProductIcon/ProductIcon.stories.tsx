import { Meta, StoryObj } from '@storybook/react';
import ProductIcon from './ProductIcon';

const meta: Meta = { title: 'Element/Icon/Product/ProductIcon', component: ProductIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ProductIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
