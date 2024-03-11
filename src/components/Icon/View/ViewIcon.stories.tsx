import { Meta, StoryObj } from '@storybook/react';
import ViewIcon from './ViewIcon';

const meta: Meta = { title: 'Element/Icon/View', component: ViewIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ViewIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
