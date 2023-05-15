import { Meta, StoryObj } from '@storybook/react';
import PropsIcon from './PropsIcon';

const meta: Meta = { title: 'Icon/Category/소품모음', component: PropsIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof PropsIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};
