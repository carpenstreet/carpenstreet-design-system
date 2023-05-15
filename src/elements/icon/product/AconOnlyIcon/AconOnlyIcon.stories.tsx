import { Meta, StoryObj } from '@storybook/react';
import AconOnlyIcon from './AconOnlyIcon';

const meta: Meta = { title: 'Elements/Icon/Product/AconOnlyIcon', component: AconOnlyIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof AconOnlyIcon>;

export const Default: Story = {
  args: {
    size: 12,
  },
};
