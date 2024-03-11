import { Meta, StoryObj } from '@storybook/react';
import NoticeIcon from './NoticeIcon';

const meta: Meta = { title: 'Element/Icon/Notice', component: NoticeIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof NoticeIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
