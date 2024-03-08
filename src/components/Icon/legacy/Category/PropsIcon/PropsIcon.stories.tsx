import { Meta, StoryObj } from '@storybook/react';
import PropsIcon from './PropsIcon.tsx';

const meta: Meta = { title: 'Element/Icon/Category/소품모음', component: PropsIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof PropsIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};
