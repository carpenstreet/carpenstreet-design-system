import { Meta, StoryObj } from '@storybook/react';
import CalendarIcon from './CalendarIcon';

const meta: Meta = { title: 'Elements/Icon/Sign/CalendarIcon', component: CalendarIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CalendarIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
