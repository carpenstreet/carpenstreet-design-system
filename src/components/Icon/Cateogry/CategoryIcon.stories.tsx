import { Meta, StoryObj } from '@storybook/react';
import CategoryIcon from './CategoryIcon';

const meta: Meta = { title: 'Element/Icon/Category', component: CategoryIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CategoryIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/black',
  },
};
