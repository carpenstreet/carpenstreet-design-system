import { Meta, StoryObj } from '@storybook/react';
import LinkIcon from './LinkIcon';

const meta: Meta = { title: 'Icon/Product/LinkIcon', component: LinkIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof LinkIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
