import { Meta, StoryObj } from '@storybook/react';
import IdentityIcon from './IdentityIcon';

const meta: Meta = { title: 'Element/Icon/Gnb/IdentityIcon', component: IdentityIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof IdentityIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
