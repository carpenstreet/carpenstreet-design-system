import { Meta, StoryObj } from '@storybook/react';
import CalendarIcon from './CalendarIcon';

const meta: Meta = { title: 'Element/Icon/Calendar', component: CalendarIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CalendarIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
