import { Meta, StoryObj } from '@storybook/react';
import SharingIcon from './SharingIcon';

const meta: Meta = { title: 'Icon/Product/SharingIcon', component: SharingIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof SharingIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
