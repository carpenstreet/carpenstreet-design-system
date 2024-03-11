import { Meta, StoryObj } from '@storybook/react';
import NoticeOutlineIcon from './NoticeOutlineIcon';

const meta: Meta = { title: 'Element/Icon/NoticeOutline', component: NoticeOutlineIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof NoticeOutlineIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
