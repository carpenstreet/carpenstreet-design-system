import { Meta, StoryObj } from '@storybook/react';
import DollarIcon from './DollarIcon';

const meta: Meta = { title: 'Elements/Icon/Sign/DollarIcon', component: DollarIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof DollarIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
