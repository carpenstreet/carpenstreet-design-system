import { Meta, StoryObj } from '@storybook/react';
import EqualsIcon from './EqualsIcon';

const meta: Meta = { title: 'Icon/Sign/EqualsIcon', component: EqualsIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof EqualsIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
