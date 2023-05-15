import { Meta, StoryObj } from '@storybook/react';
import CheckIcon from './CheckIcon';

const meta: Meta = { title: 'Elements/Icon/Sign/CheckIcon', component: CheckIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CheckIcon>;

export const Filled: Story = {
  args: {
    size: 24,
    isFilled: true,
  },
};
export const Outlined: Story = {
  args: {
    size: 24,
    isFilled: false,
  },
};
