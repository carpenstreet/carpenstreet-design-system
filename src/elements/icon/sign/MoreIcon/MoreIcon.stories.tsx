import { Meta, StoryObj } from '@storybook/react';
import MoreIcon from './MoreIcon';

const meta: Meta = { title: 'Elements/Icon/Sign/MoreIcon', component: MoreIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof MoreIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
