import { Meta, StoryObj } from '@storybook/react';
import OrientalIcon from './OrientalIcon';

const meta: Meta = { title: 'Elements/Icon/Category/동양사극무협', component: OrientalIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof OrientalIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};
