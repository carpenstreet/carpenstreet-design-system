import { Meta, StoryObj } from '@storybook/react';
import TablesIcon from './TablesIcon';

const meta: Meta = { title: 'Elements/Icon/Category/테이블모음', component: TablesIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof TablesIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};
