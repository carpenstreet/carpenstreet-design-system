import { Meta, StoryObj } from '@storybook/react';
import CategoryIcon from './CategoryIcon';

const meta: Meta = { title: 'Element/Icon/Gnb/CategoryIcon', component: CategoryIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CategoryIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
