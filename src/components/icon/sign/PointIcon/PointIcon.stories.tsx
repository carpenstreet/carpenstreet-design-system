import { Meta, StoryObj } from '@storybook/react';
import PointIcon from './PointIcon';

const meta: Meta = { title: 'Icon/Sign/PointIcon', component: PointIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof PointIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
