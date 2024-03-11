import { Meta, StoryObj } from '@storybook/react';
import SecurityIcon from './SecurityIcon';

const meta: Meta = { title: 'Element/Icon/Security', component: SecurityIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof SecurityIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};
