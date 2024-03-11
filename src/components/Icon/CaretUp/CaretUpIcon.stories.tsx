import { Meta, StoryObj } from '@storybook/react';
import CaretUpIcon from './CaretUpIcon';

const meta: Meta = { title: 'Element/Icon/CaretUp', component: CaretUpIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CaretUpIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
