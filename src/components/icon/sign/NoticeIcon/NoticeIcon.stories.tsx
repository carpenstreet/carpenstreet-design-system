import { Meta, StoryObj } from '@storybook/react';
import NoticeIcon from './NoticeIcon';

const meta: Meta = { title: 'Icon/Sign/NoticeIcon', component: NoticeIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof NoticeIcon>;

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
