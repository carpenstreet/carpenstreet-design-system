import { Meta, StoryObj } from '@storybook/react';
import ModernSliceOfLifeIcon from './ModernSliceOfLifeIcon';

const meta: Meta = { title: 'Elements/Icon/Category/현대일상물', component: ModernSliceOfLifeIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ModernSliceOfLifeIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};
