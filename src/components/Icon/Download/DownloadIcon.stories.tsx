import { Meta, StoryObj } from '@storybook/react';
import DownloadIcon from './DownloadIcon';

const meta: Meta = { title: 'Element/Icon/Download', component: DownloadIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof DownloadIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
