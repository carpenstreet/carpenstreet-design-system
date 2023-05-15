import { Meta, StoryObj } from '@storybook/react';
import RefreshIcon from './RefreshIcon';

const meta: Meta = { title: 'Icon/Sign/RefreshIcon', component: RefreshIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof RefreshIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
