import { Meta, StoryObj } from '@storybook/react';
import PlusIcon from './PlusIcon';

const meta: Meta = { title: 'Element/Icon/Sign/PlusIcon', component: PlusIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof PlusIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
