import { Meta, StoryObj } from '@storybook/react';
import BrandIcon from './BrandIcon';

const meta: Meta = { title: 'Element/Icon/Product/BrandIcon', component: BrandIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof BrandIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
