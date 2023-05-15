import { Meta, StoryObj } from '@storybook/react';
import PublicServiceEventsIcon from './PublicServiceEventsIcon';

const meta: Meta = { title: 'Icon/Category/공공서비스경조사', component: PublicServiceEventsIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof PublicServiceEventsIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};
