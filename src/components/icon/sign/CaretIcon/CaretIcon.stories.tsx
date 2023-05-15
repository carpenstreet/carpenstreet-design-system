import { Meta, StoryObj } from '@storybook/react';
import CaretIcon from './CaretIcon';

const meta: Meta = { title: 'Icon/Sign/CaretIcon', component: CaretIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CaretIcon>;

export const Down: Story = {
  args: {
    size: 24,
    direction: 'down',
  },
};
export const Up: Story = {
  args: {
    size: 24,
    direction: 'up',
  },
};
