import { Meta, StoryObj } from '@storybook/react';
import WonIcon from './WonIcon';

const meta: Meta = { title: 'Elements/Icon/Sign/WonIcon', component: WonIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof WonIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
