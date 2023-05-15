import { Meta, StoryObj } from '@storybook/react';
import CalculateIcon from './CalculateIcon';

const meta: Meta = { title: 'Elements/Icon/Product/CalculateIcon', component: CalculateIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CalculateIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
