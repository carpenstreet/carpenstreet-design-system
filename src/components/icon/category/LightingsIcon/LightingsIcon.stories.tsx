import { Meta, StoryObj } from '@storybook/react';
import LightingsIcon from './LightingsIcon';

const meta: Meta = { title: 'Icon/Category/조명모음', component: LightingsIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof LightingsIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};
