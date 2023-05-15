import { Meta, StoryObj } from '@storybook/react';
import DownloadIcon from './DownloadIcon';

const meta: Meta = { title: 'Icon/Sign/DownloadIcon', component: DownloadIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof DownloadIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
