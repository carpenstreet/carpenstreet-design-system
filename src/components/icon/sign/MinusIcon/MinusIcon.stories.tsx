import { Meta, StoryObj } from '@storybook/react';
import MinusIcon from './MinusIcon';

const meta: Meta = { title: 'Icon/Sign/MinusIcon', component: MinusIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof MinusIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
